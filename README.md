# Purchases-recorder
 A simple system for a certain user to buy random items and get a list of all the items that he bought.

## Debug Version:

### Prerequisites

Before installing, make sure you have installed the followind requerments
- Node.js.14+ or higher.
- Docker.
- PostgreSql.
- (for Airflow: python 3.8+)

### Installation

1. Clone this repo
   ```sh
   $ https://github.com/ehudb9/Purchases-recorder.githttps://github.com/ehudb9/Purchases-recorder.git
   $ cd Purchases-recorder
   ```
2. For each server install packeges  and run manually :
   ```sh
    #backend:
   $ cd backend/cd backend/CustomerManagerWebServer
   $ npm i
   $ node CustomerManagerWebServerAPI.js 
   # client-server
   $ cd client/client-server 
   $ npm i
   $ node CustomerFacingAPI.js
   $ cd client/client-ui
   $ npm i
   $ npm start

3. Build Docker containers:
   ```sh
   $ docker-compose up
   ```
   might take a while...

4. Open the UI here:  [http://0.0.0.0:3000](http://0.0.0.0:3000)
   And start to query the system. ui migh start on diferent port. use the logs.
   <br /> [Important:] No validation wad implemented for the input!.

5. Ports: for local servers: 
  - backend: `4001` 
  - client: `3001`
  - postgres: `5432`
