import { Friend, Status, Avatar, Name } from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, status }) => {
  return (
    <Friend>
      <Status status={status} />
      <Avatar src={avatar} alt="User avatar" width="60" />
      <Name>{name}</Name>
    </Friend>
  );
};

export default FriendListItem;
