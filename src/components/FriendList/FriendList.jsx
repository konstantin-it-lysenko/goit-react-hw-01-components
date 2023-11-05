import FriendListItem from 'components/FriendListItem/FriendListItem';
import { Friends } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          status={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </Friends>
  );
};

export default FriendList;
