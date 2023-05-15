import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total }) => {
  const positiveFeedbackPercentage =
    Math.round((good / (good + neutral + bad)) * 100) || 0;

  return (
    <div className={css.block}>
      <span>
        Good:
        <span>{good}</span>
      </span>
      <span>
        Neutral:
        <span>{neutral}</span>
      </span>
      <span>
        Bad:
        <span>{bad}</span>
      </span>
      <div>Total feedback: {total}</div>
      <div>
        Positive feedback percentage:{' '}
        {total === 0 ? 0 : positiveFeedbackPercentage}%
      </div>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
