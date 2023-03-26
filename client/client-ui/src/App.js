import React, { useState } from 'react';
import axios from 'axios';
import Buttons from './components/Buttons';
import Table from './components/Table';
import Title from './components/Title';



const App = () => {
  const [username, setUsername] = useState('');
  const [userid, setUserid] = useState('');
  const [price, setPrice] = useState('');
  const [data, setData] = useState([]);

  const [openTable, setOpenTable] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const baseUrl = 'http://0.0.0.0:3001';

  const handleUserid = (event) => {
    setUserid(event.target.value.toString());
  }

  const handleUsername = (event) => {
    setUsername(event.target.value.toString());
  }

  const handlePrice = (event) => {
    setPrice(event.target.value.toString());
  }

  const handleBuy = () => {
    const body = {
      "username": {username},
      "userid": {userid},
      "price": {price}
    };
    alert(body.toString());
    axios.post(`${baseUrl}/buy`, body)
      .then(response => {
        setNotificationOpen(true)
        setUserid('');
        setPrice('');
        setUsername('');
      })
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
      <form>
        <input  type="text" placeholder="user id" value={userid} onChange={handleUserid}/>
        <input  type="text" placeholder="user name" value={username} onChange={handleUsername}/>
        <input  type="text" placeholder="price" value={price} onChange={handlePrice}/>
    </form>
      
          
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
