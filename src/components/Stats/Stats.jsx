import { StatsList, StatsItem, Label, Quantity } from './Stats.styled';

const Stats = ({ followers, views, likes }) => {
  return (
    <StatsList>
      <StatsItem>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label>Likes</Label>
        <Quantity>{likes}</Quantity>
      </StatsItem>
    </StatsList>
  );
};

export default Stats;
