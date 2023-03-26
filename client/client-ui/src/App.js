import React, { useState } from 'react';
import axios from 'axios';
import Buttons from './components/Buttons';
import PurchaseForm from './components/PurchaseForm';
import Table from './components/Table';
import Title from './components/Title';



const App = () => {
  const [data, setData] = useState([]);
  const [openTable, setOpenTable] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const baseUrl = 'http://0.0.0.0:3001';

  const handleBuy = () => {
    const body = {
      "username": "Ehud",
      "userid":"escscd",
      "price": "44333.555"
    };

    axios.post(`${baseUrl}/buy`, body)
      .then(response => setNotificationOpen(true))
      .catch(error => console.error(error));
  };

  const handleSeeAll = () => {
    axios.get(`${baseUrl}/getAllUserBuys`)
      .then(response => { 
        if(response.data) {
          setData(response.data);
          setOpenTable(true);
          setNotificationOpen(false);
        }
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <Title />
      <PurchaseForm />
      <Buttons onClickBuy={handleBuy} onClickSeeAll={handleSeeAll} />
      {
        notificationOpen? 
        (<p>Record created successfully</p>)
        : null
      }
      {
        openTable? 
        (<Table data={data} />)
        : null}

    </div>
  );
};

export default App;
