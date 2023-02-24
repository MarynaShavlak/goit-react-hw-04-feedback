import React, { Component } from 'react';
import { GlobalStyle } from "components/GlobalStyle";
import { Container } from "./App.styled";
import { Section } from "components/Section";
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';
import { Notification } from 'components/Notification';

export class App extends Component {
    state = {
      good: 0,
      neutral: 0,
      bad: 0
    }

  onLeaveFeedback = option => {
  
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }))
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const totalVotes = this.countTotalFeedback();
    return totalVotes === 0 ? 0 : Math.round(this.state.good * 100/ totalVotes);
}


  
  render() {
    const { good, neutral, bad } = this.state;
    const hasStatisticsResults = this.countTotalFeedback() !== 0;

    return (
    <Container>
        <Section title="Please, leave your feedback">
          <FeedbackOptions options={Object.keys(this.state) } onLeaveFeedback={this.onLeaveFeedback}/>
        </Section>
        <Section title="Statistics">
          {hasStatisticsResults
            ? 
            (<Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}>
            </Statistics>)
            : 
            (<Notification message="There is no feedback" />)
          }
        </Section>
      <GlobalStyle/>
    </Container>
    );
  }
  

}
