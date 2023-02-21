import css from './FeedbackActions.module.css';
import PropTypes from 'prop-types';

const FeedbackActions = ({ leaveFeedback, feedbackOptions }) => {
  return (
    <div className={css.button}>
      {feedbackOptions.map(option => (
        <button key={option} onClick={() => leaveFeedback(option)}>
          {option}
        </button>
      ))}
      {/* <button onClick={() => leaveFeedback('Good')}>Good</button>
      <button onClick={() => leaveFeedback('Neutral')}>Neutral</button>
      <button onClick={() => leaveFeedback('Bad')}>Bad</button> */}
    </div>
  );
};

export default FeedbackActions;

FeedbackActions.propTypes = {
  leaveFeedback: PropTypes.func,
  feedbackOptions: PropTypes.array,
};
