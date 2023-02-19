import FeedbackActions from './FeedbackActions/FeedbackActions';
import FeedbackResult from './FeedbackResult/FeedbackResult';
import Notification from './Notification/Notification';
import Section from 'components/Section/Section';
import css from './Feedback.module.css';
import { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  calcTotal() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  calcPercent() {
    const value = this.state.good;
    const total = this.calcTotal();
    if (!total) {
      return 0;
    }
    const result = Math.round((value / total) * 100);
    return result;
  }

  leaveFeedback = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };
  render() {
    const total = this.calcTotal();
    const goodPercent = this.calcPercent();
    console.log(goodPercent);
    console.log(total);
    return (
      <div className={css.feedback}>
        <Section title="Please leave feedback">
          <FeedbackActions
            leaveFeedback={this.leaveFeedback}
            feedbackOptions={Object.keys(this.state)}
          />
        </Section>

        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statistics">
            <FeedbackResult
              total={total}
              goodPercent={goodPercent}
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
            />
          </Section>
        )}
      </div>
    );
  }
}

export default Feedback;
