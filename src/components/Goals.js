import React from 'react';
import { Pie } from 'react-chartjs-2';
import './Goals.css';

const data = {
  labels: ['Completed', 'In Progress', 'Not Started'],
  datasets: [
    {
      data: [70, 20, 10],
      backgroundColor: ['#4caf50', '#ff9800', '#f44336'],
      hoverBackgroundColor: ['#66bb6a', '#ffb74d', '#e57373'],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    position: 'bottom',
  },
};

const Goals = () => {
  return (
    <div className="goals">
      <h3>Goals</h3>
      <div className="pie-chart-container">
        <Pie data={data} options={options} />
      </div>
      <ul>
        <li><i className="fas fa-utensils"></i> Popular Dishes</li>
        <li><i className="fas fa-book"></i> Menus</li>
      </ul>
    </div>
  );
};

export default Goals;
