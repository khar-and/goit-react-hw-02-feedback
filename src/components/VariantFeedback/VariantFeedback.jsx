import PropTypes from 'prop-types';
import React from 'react';
import { Button, Item, List } from './VariantFeedback.styled';

const VariantFeedback = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => (
        <Item key={option}>
          <Button onClick={() => onLeaveFeedback(option)}>{option}</Button>
        </Item>
      ))}
    </List>
  );
};

VariantFeedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default VariantFeedback;
