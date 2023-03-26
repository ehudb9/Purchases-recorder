import React from 'react';

const PurchaseForm = ({ onClickBuy, onClickSeeAll }) => {
  return (
    <form>
  <input className="form-control" type="text" placeholder="user id"/>
  <input className="form-control" type="text" placeholder="user name"/>
  <input className="form-control" type="text" placeholder="price"/>
    </form>
  );
};

export default PurchaseForm;