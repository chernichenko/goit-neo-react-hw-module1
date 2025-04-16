import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.card}>
      <div className={css.user}>
        <img src={image} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li>
          <span>Followers</span>
          <strong>{stats.followers}</strong>
        </li>
        <li className={css.borders}>
          <span>Views</span>
          <strong>{stats.views}</strong>
        </li>
        <li>
          <span>Likes</span>
          <strong>{stats.likes}</strong>
        </li>
      </ul>
    </div>
  );
};

export default Profile;