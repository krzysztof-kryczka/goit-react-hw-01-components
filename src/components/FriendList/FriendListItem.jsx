import css from './FriendList.module.css';

export const FriendListItem = ({ friends }) => {
  return friends.map(({ avatar, name, isOnline, id }) => {
    const status = isOnline ? css.online : css.offline;
    return (
      <li className={css.item} key={id}>
        <span className={[css.status, status].join(' ')}></span>
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={css.name}>{name}</p>
      </li>
    );
  });
};
