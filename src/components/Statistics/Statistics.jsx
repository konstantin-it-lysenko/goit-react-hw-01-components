import StatisticsTitle from 'components/StatisticsTitle/StatisticsTitle';
import StatisticsItem from 'components/StatisticsItem/StatisticsItem';
import data from 'JSON/data.json';
import { Section, List } from './Statistics.styled';

const Statistics = () => {
  return (
    <Section>
      <StatisticsTitle title="Upload stats" />

      <List>
        {data.map(({ id, label, percentage }) => (
          <StatisticsItem key={id} label={label} percentage={percentage} />
        ))}
      </List>
    </Section>
  );
};

export default Statistics;
