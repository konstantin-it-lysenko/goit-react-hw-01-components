import './Description.module.css';
import css from './Description.module.css';

const Description = ({ username, tag, location, avatar }) => {
  return (
    <div className={css.description}>
      <img
        src={avatar}
        alt="User avatar"
        className={css.avatar}
        width={150}
        height={150}
      />
      <h3 className={css.name}>{username}</h3>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  );
};

export default Description;
