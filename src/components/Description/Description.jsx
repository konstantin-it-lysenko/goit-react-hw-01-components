import {
  Container,
  Avatar,
  Username,
  Tag,
  Location,
} from './Description.styled';

const Description = ({
  username,
  tag,
  location,
  avatar = 'https://dummyimage.com/480x480/2a2a2a/ffffff&text=Product+image+placeholder',
}) => {
  return (
    <Container>
      <Avatar src={avatar} alt="User avatar" width={150} />
      <Username>{username}</Username>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </Container>
  );
};

export default Description;
