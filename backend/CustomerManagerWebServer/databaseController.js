import pg from 'pg';

const client = new pg.Pool({
    user: 'myuser',
    host: 'intrepo_db_1',
    // host: 'localhost',
    database: 'purchases_records',
    password: 'mypassword',
    port: 5432,
  });
  
  
client.connect();

export const insertBuyRequest  = (userid, username, price, timestamp) => {
    client.query('INSERT INTO userspurchases (userid, username, price, timestamp) VALUES ($1, $2, $3, $4)',
     [userid, username, price, timestamp]);
    
    // add triggering total_spend dag here to update total spend 
    // const dagId = "user_total_spent";
    // const dagTriggerUrl = `http://0.0.0.0:8080/api/v1/dags/${dagId}/dagRuns`;

    // fetch(dagTriggerUrl, { method: "POST" })
    // .then((response) => {
    //     if (response.ok) {
    //       console.log("DAG triggered successfully!");
    //     } else {
    //       console.log(`Failed to trigger DAG: ${response.statusText}`);
    //     }
    //   })
    // .catch((error) => console.log(`Error triggering DAG: ${error.message}`));
}

export const getAllUserBuys = async () => {
  const result = await client.query(
    `select * from userspurchases`
  );
  console.log(result.rows);
  return result.rows;
};
