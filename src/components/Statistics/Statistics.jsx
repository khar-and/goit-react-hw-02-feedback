import React from 'react';
import PropTypes from 'prop-types';
import { List } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePersentage }) => {
  return (
    <List>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Positive Feedback:{positivePersentage}</li>
      <li>Total: {total}</li>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
