import PropTypes from 'prop-types';
import { StatisticsList, StatisticsItem } from './Statistics.styled';
import { renderIcons } from 'utils/renderIcons';
import { iconSize } from 'constants';

export function Statistics({good, neutral, bad, total, positivePercentage}) {
  return (
    <StatisticsList>
      <StatisticsItem>
        {renderIcons('good', iconSize.md)}
        <span className="stat__title">Good</span>
        <span className="stat__value">{good}</span>
      </StatisticsItem>
      <StatisticsItem>
        {renderIcons('neutral', iconSize.md)}
        <span className="stat__title">Neutral</span>
        <span className="stat__value">{neutral}</span>
      </StatisticsItem>
      <StatisticsItem>
        {renderIcons('bad', iconSize.md)}
        <span className="stat__title">Bad</span>
        <span className="stat__value">{bad}</span>
      </StatisticsItem>
      <StatisticsItem>
        {renderIcons('total', iconSize.md)}
        <span className="stat__title">Total</span>
        <span className="stat__value">{total}</span>
      </StatisticsItem>
      <StatisticsItem>
        {renderIcons('percent', iconSize.md)}
        <span className="stat__title">Positive FeedBack</span>
        <span className="stat__value">{positivePercentage}%</span>
      </StatisticsItem>
  </StatisticsList>
)
} 

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}