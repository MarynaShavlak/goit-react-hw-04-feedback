import React, { useState } from 'react';
import { GlobalStyle } from "components/GlobalStyle";
import { Container } from "./App.styled";
import { Section } from "components/Section";
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';
import { Notification } from 'components/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  
  const feedbackOptions = { good,bad,neutral };
  
 const onLeaveFeedback = option => {
  switch (option) {
      case 'good':
        setGood(prevState => prevState + 1)
        break;
      
      case 'neutral':
        setNeutral(prevState => prevState + 1)
        break;
      
      case 'bad':
        setBad(prevState => prevState + 1)
        break;
    
    default:
        console.warn(`Feedback with name ${option} cannot be processed `);
    }
     
  }

 const countTotalFeedback = ()=> {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage= () =>   {
    const totalVotes = countTotalFeedback();
    return totalVotes === 0 ? 0 : Math.round(good * 100/ totalVotes);
}

   const hasStatisticsResults = countTotalFeedback() !== 0;

    return (
    <Container>
        <Section title="Please, leave your feedback">
          <FeedbackOptions options={Object.keys(feedbackOptions) } onLeaveFeedback={onLeaveFeedback}/>
        </Section>
        <Section title="Statistics">
          {hasStatisticsResults
            ? 
            (<Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}>
            </Statistics>)
            : 
            (<Notification message="There is no feedback" />)
          }
        </Section>
      <GlobalStyle/>
    </Container>
    );
  
};
