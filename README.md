# Purchases-recorder

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#Main-Structure">Main Structure</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#NextStep">Next steps</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

A simple system for a certain user to buy random items and get a list of all the items that he bought.

<!-- Main Structure -->
### Main Structure:

* BackEnd side: 
  - Customer Manager Web Server: node.js server 
  - Kfaka consumer.
  - PostgresSql.
  - *TBC*: AirFlow DAG.
  - *TBC*: Grafana dashboard.

* Client side:
  - Customer-Facing API: node.js server
  - UI: React Js

<!-- GETTING STARTED -->
## Getting Started

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
   $ cd billingSystemTask
   ```
2. Build Docker containers:
   ```sh
   $ docker-compose up
   ```
   mights taske w while...
4. Open the UI here:  [http://0.0.0.0:3000](http://0.0.0.0:3000)
   And start to query the system.
   <br /> [Important:] No validation wad implemented for the input!.

5. For Local Running and Debugging switch to brand `version-for-local-debug`

<!-- NextStep -->
## Next steps:
   The following tasks will be the next to make the system better and ,more efficient with cleaner code.
   Next steps:

   * system:
        - [ ] adding password for each customer and secure any change with it/secure the login
        - [ ] Complete implementing AirFlow DAG to calculate total spends.
        - [ ] Complete implementing Grafana dashboard to visualize the total spend for each user, and to set an alert if a user crossed a threshold.
        
   * Code::
        - [ ] Extracting ports, urls and more to env variables,
        - [ ] Making faces for dev-local running.
        - [ ] User Id generator.
        - [ ] Types of variables, currently all set as strings.
        - [ ] Add more columns to the DB and the ui for each purchase like product name, description ect..
        - [ ] make validations to avoid invalid input or update primary key.

   * UI: :
        - [ ] Making the buy button send a given params from the ui.
        - [ ] Design the components an add more react-hooks with notifications when a purchase had been received to the DB
        - [ ] styling.
        - [ ] Let the table refresh after sending a new purchase.
        - [ ] And more hooks functionality.
        - [ ] Input validations.
