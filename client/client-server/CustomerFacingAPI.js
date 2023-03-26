import publishBuyRequest from './KakaProducer.js';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import axios from 'axios';

const app = express();


const PORT = 3001;

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/getAllUserBuys', async (req, res) => {
  try {
    // const response = await axios.get("http://intrepo_customer-manager-web-server_1:4001/getAllUserBuys");
    // For local runnig
    const response = await axios.get("http://localhost:4001/getAllUserBuys");
    console.log(response.data)
    res.json(response.data)    
  } catch (error) {
    return res.json(error);
  }
});

app.post('/buy', async (req, res) => {
  var {username ,userid, price} = req.body;
  const run = async () => {
    publishBuyRequest(username ,userid, price);
    res.status(200).send('message send');
  }
  
  run().catch((e)=>{
    console.log(e);
    res.status(500).send('error');
  })   
});

app.listen(PORT, () => {
    console.log(`(client-server) running at PORT: ${PORT}`);
})
