import React from 'react';
import './Stats.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Stats = () => {
  return (
    <div className="stats">
      <div className="stat">
        <i className="fas fa-boxes"></i>
        <h3>Total Orders</h3>
        <p>75</p>
      </div>
      <div className="stat">
        <i className="fas fa-shipping-fast"></i>
        <h3>Total Delivered</h3>
        <p>70</p>
      </div>
      <div className="stat">
        <i className="fas fa-times-circle"></i>
        <h3>Total Cancelled</h3>
        <p>5</p>
      </div>
      <div className="stat">
        <i className="fas fa-dollar-sign"></i>
        <h3>Total Revenue</h3>
        <p>$12k</p>
      </div>
      <div className="stat">
        <i className="fas fa-chart-line"></i>
        <h3>Net Profit</h3>
        <p>$6759.25</p>
      </div>
    </div>
  );
};

export default Stats;
