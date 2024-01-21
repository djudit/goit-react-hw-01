import css from './Profile.module.css';

export const Profile = ({
  name,
  tag,
  location,
  image = 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
  stats,
}) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={image} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className="label">Followers</span>
          <span className={css.value}>{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className={css.value}>{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className={css.value}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
