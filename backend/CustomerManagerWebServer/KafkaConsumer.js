console.log("kafka reciver starter");
import Kafka from "node-rdkafka";
import eventType from '../../client/client-server/purchaseEvent.js'
import { insertBuyRequest }  from './databaseController.js'

const consumer = Kafka.KafkaConsumer(
    { 
        'metadata.broker.list': 'kafka:9092',
        'group.id': 'kafkaEhud'
    },
    {}, { topic: 'purchases'});

consumer.connect();

consumer.on('ready', () => {
    console.log("consumer is ready..")
    // subscribe to kafka topics:
    consumer.subscribe(['purchases']);
    consumer.consume();
}).on('data', (m) => {
    console.log(`got message: ${eventType.fromBuffer(m.value)}`);
    const {username ,userid, price, timestamp} = eventType.fromBuffer(m.value);
    insertBuyRequest(userid, username, parseFloat(price), timestamp);
});
