import React, { useRef, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import './Activity.css';

Chart.register(...registerables);

const Activity = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = new Chart(chartRef.current, {
      type: 'bar',
      data: {
        labels: ['5', '9', '11', '13', '15', '17', '19', '21'],
        datasets: [
          {
            label: 'Activity',
            data: [5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    return () => {
      chartInstance.destroy();
    };
  }, []);

  return (
    <div className="activity">
      <h3>Activity</h3>
      <div className="chart">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default Activity;
