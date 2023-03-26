import React from 'react';

const Buttons = ({ onClickBuy, onClickSeeAll }) => {
  return (
    <div>
      <button type="button" className="mx-2 btn btn-light" onClick={onClickBuy}>Buy</button>
      <button type="button" className="mx-2 btn btn-light" onClick={onClickSeeAll}>See All</button>
    </div>
  );
};

export default Buttons;
