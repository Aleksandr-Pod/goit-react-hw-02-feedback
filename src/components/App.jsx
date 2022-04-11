import {Component} from 'react';
import Statistics from './Statistics';
import FeedbackOptions from "./FeedbackOptions";
import Section from './Section';
import Notification from './Notification';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  countTotalFeedback = () => {
    // return (this.state.good + this.state.neutral + this.state.bad); // Хардкор
    return Object.values(this.state).reduce((total, el) => total + el, 0); // для любого кол-ва
  }
  countPositiveFeedbackPercentage = () => (Math.round(this.state.good / this.countTotalFeedback() * 100));

  onFeedbackHandle = (evt) => {
    const stateName = evt.currentTarget.name;
    this.setState(prev => ({ [stateName]: prev[stateName] + 1 }));
  }
  btns = () => Object.keys(this.state);
  
  render() {
    const {good, neutral, bad} = this.state
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.btns()} onLeaveFeedback={this.onFeedbackHandle}/>
        </Section>
        
        <Section title="Statistics">
          {this.countTotalFeedback() ?
            <Statistics good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage} /> :
              <Notification message="There is no feedback"/> }
        </Section>
      </div>
    );
  }
}