const FeedbackResult = ({ total, goodPercent, good, neutral, bad }) => {
  return (
    <div>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive Feedback: {goodPercent}%</p>
    </div>
  );
};

export default FeedbackResult;
