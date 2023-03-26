import React from 'react';

const PurchaseForm = ({ onClickBuy, onClickSeeAll }) => {
  return (
    <form>
  <input  type="text" placeholder="user id"/>
  <input  type="text" placeholder="user name"/>
  <input  type="text" placeholder="price"/>
    </form>
  );
};

export default PurchaseForm;