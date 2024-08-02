import React from 'react';
import './Feedback.css';

const Feedback = () => {
  const feedbacks = [
    { customer: 'Jenny Wilson', rating: 5, feedback: 'The food was excellent and so was the service.' },
    { customer: 'Dianne Russell', rating: 4, feedback: 'We enjoyed the Eggs Benedict served on homemade focaccia bread.' },
    { customer: 'Devon Lane', rating: 4, feedback: 'Normally are wings, but theirs are lean meaty and tender, and have a good variety of sauces to choose from.' },
  ];

  return (
    <div className="feedback">
      <h3>Customer's Feedback</h3>
      <ul>
        {feedbacks.map((feedback, index) => (
          <li key={index}>
            <span>{feedback.customer}</span>
            <span>{'⭐'.repeat(feedback.rating)}</span>
            <span>{feedback.feedback}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feedback;
