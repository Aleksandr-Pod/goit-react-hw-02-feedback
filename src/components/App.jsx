import React from 'react';
import Statistics from './Statistics';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  countTotalFeedback = () => {
    return (this.state.good + this.state.neutral + this.state.bad)
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
  onClickHandle = (evt) => {
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
        <h2>Please leave feedback</h2>
        {btns.map((btn, idx) => (
          <button type="button" key={idx} name={btn.toLowerCase()} onClick={this.onClickHandle}>{btn}</button>
        ))}
        <Statistics good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}>
          <h2>Statistics</h2>
        </Statistics>
      </div>
    );
  }
};
