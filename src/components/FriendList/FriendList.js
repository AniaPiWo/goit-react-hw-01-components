import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
    return (
      <section>
  
        <ul>
          {friends.map(friend => (
            <li 
            key={friend.id}
            className={item}>
              <span className={status}>{friend.isOnline}</span>
              <img  
                src={friend.avatar}
                alt="" 
                className={avatar}
              />
              <p className={name}>{friend.name}</p>
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