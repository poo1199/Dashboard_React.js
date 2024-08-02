import React from 'react';
import Stats from './Stats';
import Activity from './Activity';
import Orders from './Orders';
import Feedback from './Feedback';
import Goals from './Goals';
import './Main.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Main = () => {
  return (
    <main className="main">
      <Stats />
      <div className="row">
        <div className="activity-goals">
        <Activity />
        <Goals />
        </div>
        </div>
      <div className="row">
        <div className="orders-feedback">
          <Orders />
          <Feedback />
        </div>
      </div>
    </main>
  );
};

export default Main;
