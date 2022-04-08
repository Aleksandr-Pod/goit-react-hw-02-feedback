import {Component} from 'react';
import Statistics from './Statistics';
import FeedbackOptions from "./FeedbackOptions";
import Section from './Section';
import Notification from './Notification';
import PropTypes from 'prop-types';

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
  countPositiveFeedbackPercentage = () => {
    return (this.state.good / this.countTotalFeedback() * 100);
  }
  
  onFeedbackHandle = (evt) => {

    const stateName = evt.currentTarget.name;
    this.setState(prev => ({ [stateName]: prev[stateName] + 1 }));
  }
  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onFeedbackHandle}/>
        </Section>
        
        <Section title="Statistics">
          {this.countTotalFeedback() ?
            <Statistics good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage} /> :
              <Notification message="There is no feedback"/> }
        </Section>
      </div>
    );
  }
};
FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func
}
