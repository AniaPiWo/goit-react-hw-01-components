export const FriendList = ({ friends }) => {
    return (
      <section>
  
        <ul>
          {friends.map(friend => (
            <li key={friend.id}>
              <span>{friend.isOnline}</span>
              <img alt="" src={friend.avatar}/>
              <p>{friend.name}</p>
            </li>
          ))}
        </ul>
        
      </section>
    );
  };