import React from 'react';
import './Orders.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Orders = () => {
  const orders = [
    { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
    { customer: 'Jane Cooper', orderNo: '48967586', amount: '$305.02', status: 'Delivered' },
    { customer: 'Guy Hawkins', orderNo: '78985215', amount: '$54.88', status: 'Cancelled' },
    { customer: 'Kristin Watson', orderNo: '20965732', amount: '$65.00', status: 'Pending' },
    { customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered' },
    { customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered' },
  ];

  return (
    <div className="orders">
      <h3>Recent Orders</h3>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>
            <span>{order.customer}</span>
            <span>{order.orderNo}</span>
            <span>{order.amount}</span>
            <span className={`status ${order.status.toLowerCase()}`}>{order.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
