import PropTypes from 'prop-types';
import { OptionsList, OptionItem, OptionButton } from './FeedbackOptions.styled';
import { renderIcons } from 'utils/renderIcons';
import { iconSize } from 'constants';

export function FeedbackOptions({ options, onLeaveFeedback }) {
 
    return (
    <OptionsList>
      {options.map(option => (
        <OptionItem key={option}>
          <OptionButton type='button' name={option} onClick={() => onLeaveFeedback(option)}>
            {renderIcons(option, iconSize.sm)}
            {option}
          </OptionButton>
        </OptionItem>
      ))}
    </OptionsList>
  );

}




FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}