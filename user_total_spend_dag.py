from airflow import DAG
from airflow.operators.postgres_operator import PostgresOperator
from airflow.operators.python_operator import PythonOperator
from datetime import datetime, timedelta
import psycopg2

default_args = {
    'owner': 'airflow',
    'depends_on_past': False,
    'start_date': datetime(2023, 2, 5),
    'email_on_failure': False,
    'email_on_retry': False,
    'retries': 1,
    'retry_delay': timedelta(minutes=5),
}

dag = DAG(
    'user_total_spent',
    default_args=default_args,
    schedule_interval='@daily',
)

def calculate_total_spent():
    # Connect to the PostgreSQL database
    conn = psycopg2.connect(
        host="intrepo_db_1",
        port="5432",
        database="database",
        user="user",
        password="password",
    )
    cursor = conn.cursor()
    # Calculate the total spent by each user
    query = """
        SELECT userid, SUM(price)
        FROM userspurchases
        GROUP BY userid
    """
    cursor.execute(query)
    results = cursor.fetchall()
    
    # Write the results to the user_total_spent table
    for result in results:
        user_id = result[0]
        total_spent = result[1]
        update_query = f"""
            INSERT INTO user_total_spent (userid, total_spent)
            VALUES ({user_id}, {total_spent})
            ON CONFLICT (user_id) DO UPDATE SET total_spent = {total_spent}
        """
        cursor.execute(update_query)
    # Commit the changes and close the connection
    conn.commit()
    conn.close()

calculate_total_spent_task = PythonOperator(
    task_id='calculate_total_spent',
    python_callable=calculate_total_spent,
    dag=dag,
)

dag.doc_md = __doc__

calculate_total_spent_task
