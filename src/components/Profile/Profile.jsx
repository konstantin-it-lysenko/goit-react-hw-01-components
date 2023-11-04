import Description from 'components/Description/Description';
import Stats from 'components/Stats/Stats';
import user from 'JSON/user.json';
import { Wrapper } from './Profile.styled';

const Profile = () => {
  return (
    <Wrapper>
      <Description
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
      ></Description>
      <Stats
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      ></Stats>
    </Wrapper>
  );
};

export default Profile;
