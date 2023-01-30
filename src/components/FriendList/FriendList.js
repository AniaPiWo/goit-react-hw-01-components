import css from "./FriendList.module.css"
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
    return (
      <section>
  
        <ul className={css.friendList}>
          {friends.map(friend => (
            <li 
            key={friend.id}
            className={css.item}>
                    {(friend.isOnline) ? <span className={css.isOnline}></span> : <span className={css.isOffline}></span>}
              <img  
                src={friend.avatar}
                alt="friend avatar" 
                className={css.avatar}
              />
              <p className={css.name}>{friend.name}</p>
            </li>
          ))}
        </ul>
        
      </section>
    );
  };

  FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  };