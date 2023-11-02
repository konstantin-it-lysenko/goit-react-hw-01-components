import Description from 'components/Description/Description';
import Stats from 'components/Stats/Stats';
import user from 'JSON/user.json';
import css from './Profile.module.css';

const Profile = () => {
  return (
    <div className={css.profileWrapper}>
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
    </div>
  );
};

export default Profile;
