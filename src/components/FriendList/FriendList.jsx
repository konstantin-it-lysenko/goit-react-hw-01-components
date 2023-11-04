import FriendListItem from 'components/FriendListItem/FriendListItem';
import { Friends } from './FriendList.styled';
import friends from 'JSON/friends.json';

const FriendList = () => {
  return (
    <Friends>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          status={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </Friends>
  );
};

export default FriendList;
