import React, { useState } from 'react';
import { FeedbackOptions } from './feedback/Feedback/FeadbackOptions';
import { Statistics } from './feedback/Statistics/Statistics';
import { Notification } from './feedback/Notification/Notification';

export const App = ({ good, neutral, bad }) => {
  const [total, setTotal] = useState(good + neutral + bad);
  const [goodValue, setGood] = useState(good);
  const [neutralValue, setNeutral] = useState(neutral);
  const [badValue, setBad] = useState(bad);
  const positiveFeedbackPercentage = Math.round((goodValue / total) * 100) || 0;
  const handleFeedback = option => {
    if (option === 'good') {
      setGood(prevGood => prevGood + 1);
    } else if (option === 'neutral') {
      setNeutral(prevNeutral => prevNeutral + 1);
    } else if (option === 'bad') {
      setBad(prevBad => prevBad + 1);
    }
    setTotal(prevTotal => prevTotal + 1);
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Please leave only positive reviews &#129488;</h1>
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={handleFeedback}
      />
      {total > 0 ? (
        <Statistics
          good={goodValue}
          neutral={neutralValue}
          bad={badValue}
          total={total}
          positivePercentage={positiveFeedbackPercentage}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
