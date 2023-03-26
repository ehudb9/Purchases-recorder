import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { getAllUserBuys } from './databaseController.js';
import Kafka from "node-rdkafka";
import { insertBuyRequest }  from './databaseController.js';
import eventType from "./purchaseEvent.js";


const app = express();

const PORT = 4001;

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/getAllUserBuys', async (req, res) => {
  try{
      const result = await getAllUserBuys();
      console.log(result)
      res.json(result);
  }
  catch(err) {
      res.status(500).json(err);
  }
});


app.listen(PORT, () => {
    console.log(`(client-server) running at PORT: ${PORT}`);
})

// starting kafka consumer to get ready to recived messaging.
const consumer = Kafka.KafkaConsumer(
    { 
        'metadata.broker.list': '0.0.0.0:9092',
        'group.id': 'kafka'
    },
    {}, { topic: 'purchases'});

consumer.connect();

consumer.on('ready', () => {
    console.log("consumer is ready..")
    // subscribe to kafka topics:
    consumer.subscribe(['purchases']);
    consumer.consume();
    console.log("kafka reciver starter");
}).on('data', (m) => {
    console.log(`got message: ${eventType.fromBuffer(m.value)}`);
    const {username ,userid, price, timestamp} = eventType.fromBuffer(m.value);
    // inset the message to postgres database
    insertBuyRequest(userid, username, parseFloat(price), timestamp);
});
