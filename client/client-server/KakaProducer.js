console.log("kafka sender client starter");

import Kafka from "node-rdkafka";
import eventType from "./purchaseEvent.js";

const stream = Kafka.Producer.createWriteStream({ "metadata.broker.list": "kafka:9092"}, {}, { topic: "purchases"});

const publishBuyRequest = (username ,userid, price ) => {
    const event = eventType.toBuffer({ 
        username:username , userid:userid, price:price ,timestamp: Date.now().toString()
    });
    
    const res = stream.write(event);

    if (res) {
        console.log(`purchase: ${username} ,${userid}, ${price} have been wrote on kafka succefully`)
    } else {
        console.log(`somthing went wrong with writing purchase: ${username} ,${userid}, ${price} to kafka`)
    }
};

export default publishBuyRequest;