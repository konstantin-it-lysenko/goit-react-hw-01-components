import StatisticsItem from 'components/StatisticsItem/StatisticsItem';
import { Title, Section, List } from './Statistics.styled';

const Statistics = ({ title, data }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <List>
        {data.map(({ id, label, percentage }) => (
          <StatisticsItem key={id} label={label} percentage={percentage} />
        ))}
      </List>
    </Section>
  );
};

export default Statistics;
