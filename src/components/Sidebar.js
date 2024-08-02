import React from 'react';
import './Sidebar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><i className="fas fa-tachometer-alt"></i></li>
        <li><i className="fas fa-box"></i></li>
        <li><i className="fas fa-users"></i></li>
        <li><i className="fas fa-chart-line"></i></li>
        <li><i className="fas fa-cogs"></i></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
