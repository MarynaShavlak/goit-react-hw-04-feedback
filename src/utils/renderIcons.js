import { RiEmotionHappyLine } from 'react-icons/ri';
import { RiEmotionNormalLine } from 'react-icons/ri';
import { RiEmotionUnhappyLine } from 'react-icons/ri';
import { FiPercent } from 'react-icons/fi';
import { RiEmotionLine } from 'react-icons/ri';
import { TbSum } from 'react-icons/tb';

export function renderIcons(param, size) {
  switch (param) {
    case 'good':
      return <RiEmotionHappyLine size={size} />;
    case 'neutral':
      return <RiEmotionNormalLine size={size} />;
    case 'bad':
      return <RiEmotionUnhappyLine size={size} />;
    case 'total':
      return <TbSum size={size} />;
    case 'percent':
      return <FiPercent size={size} />;
    default:
      return <RiEmotionLine size={size} />;
  }
}
