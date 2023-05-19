import React, { useState } from 'react';
import { FeedbackOptions } from './Feedback/FeadbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalFeedback = good + neutral + bad;
  const positiveFeedbackPercentage = Math.round((good / (good + neutral + bad)) * 100) || 0;

    const handleFeedback = option => {
      switch (option) {
        case 'good':
          setGood(prevGood => prevGood + 1);
          break;
        case 'neutral':
          setNeutral(prevNeutral => prevNeutral + 1);
          break;
        case 'bad':
          setBad(prevBad => prevBad + 1);
          break;
        default:
          alert('Leave feedback');
      }
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
options={Object.keys({good, neutral, bad})}
onLeaveFeedback={handleFeedback}
/> 
      {totalFeedback > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positiveFeedbackPercentage={positiveFeedbackPercentage}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
