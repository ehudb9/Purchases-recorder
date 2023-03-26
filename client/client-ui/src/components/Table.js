import React from 'react';

const Table = ({ data }) => {
  return (
    <table className="table text-light">
      <thead>
        <tr>
          <th>UserId</th>
          <th>Username</th>
          <th>Price</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.userid}>
            <td>{item.userid}</td>
            <td>{item.username}</td>
            <td>{item.price}</td>
            <td>{item.timestamp}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
