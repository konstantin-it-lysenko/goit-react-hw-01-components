import {
  Wrapper,
  Container,
  Avatar,
  Username,
  Tag,
  Location,
  StatsList,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';

const Profile = ({
  avatar = 'https://dummyimage.com/480x480/2a2a2a/ffffff&text=Product+image+placeholder',
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <Wrapper>
      <Container>
        <Avatar src={avatar} alt="User avatar" width={150} />
        <Username>{username}</Username>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Container>
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
    </Wrapper>
  );
};

export default Profile;
