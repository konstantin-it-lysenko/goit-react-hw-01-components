import { Title } from './StatisticsTitle.styled';

const StatisticsTitle = ({ title }) => {
  return title && <Title>{title}</Title>;
};

export default StatisticsTitle;
