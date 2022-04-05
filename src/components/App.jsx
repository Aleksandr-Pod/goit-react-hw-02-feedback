import React from 'react';
import Statistics from './Statistics';
import FeedbackOptions from "./FeedbackOptions";
import Section from './Section';
import Notification from './Notification';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  countTotalFeedback = () => {
    return (this.state.good + this.state.neutral + this.state.bad);
    //         // Если в стейте заранее не известно количество свойств:
    // let total=0;
    //   for (const key in this.state) {
    //     total += this.state[key]
    //   }
    //   return total;
  }
  countPositiveFeedbackPercentage = () => {
    return (this.state.good / this.countTotalFeedback() * 100);
  }
  
  onFeedbackHandle = (evt) => {
    const btnName = evt.currentTarget.name;
    this.setState(prev => ({ [btnName]: (prev[btnName] + 1) }))
    console.log(this.state);
  }
  render() {
    const btns = ["Good", "Neutral", "Bad"];
    //        // Если не известно сколько будет кнопок
    // const btns = [];
    // for (const key in this.state) {
    //   btns.push(key.charAt(0).toUpperCase() + key.slice(1))
    // }
    
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={btns} onLeaveFeedback={this.onFeedbackHandle}/>
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
