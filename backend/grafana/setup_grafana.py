import requests

# Define Grafana API endpoint
grafana_api_url = "http://0.0.0.0:7000/api"

# Define Grafana API key
api_key = "<your_api_key_here>"

# Define database configuration
db_config = {
    "name": "My Purchases Records",
    "type": "postgres",
    "access": "proxy",
    "database": "purchases_records",
    "user": "myuser",
    "password": "mypassword",
    "host": "intrepo_db_1",
    "sslmode": "disable",
    "port": "5432"
}

# Define dashboard configuration
dashboard_config = {
    "dashboard": {
        "title": "My Purchases Records",
        "panels": [
            {
                "type": "graph",
                "title": "Total Spent by User",
                "datasource": "My Purchases Records",
                "targets": [
                    {
                        "refId": "A",
                        "query": "SELECT sum(total_spent) as \"Total Spent\", user_id as \"User ID\" FROM user_total_spent GROUP BY user_id ORDER BY \"Total Spent\" DESC"
                    }
                ]
            }
        ],
        "timezone": "browser",
        "schemaVersion": 22,
        "version": 0
    },
    "folderId": 0,
    "overwrite": True
}


# Create database data source
ds_create_url = f"{grafana_api_url}/datasources"
ds_create_payload = {
    "name": db_config["name"],
    "type": db_config["type"],
    "access": db_config["access"],
    "database": db_config["database"],
    "user": db_config["user"],
    "password": db_config["password"],
    "host": db_config["host"],
    "sslmode": db_config["sslmode"],
    "port": db_config["port"]
}
ds_create_headers = {"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"}
ds_create_response = requests.post(ds_create_url, headers=ds_create_headers, json=ds_create_payload)

# Create dashboard
db_create_url = f"{grafana_api_url}/dashboards/db"
db_create_payload = {"dashboard": dashboard_config, "overwrite": dashboard_config["overwrite"]}
db_create_headers = {"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"}
db_create_response = requests.post(db_create_url, headers=db_create_headers, json=db_create_payload)

# Print response
print(f"Grafana Docker container started with ID {docker_response.text}")
print(f"Database data source created with ID {ds_create_response.text}")
print(f"Dashboard created with ID {db_create_response.json()['id']}")
