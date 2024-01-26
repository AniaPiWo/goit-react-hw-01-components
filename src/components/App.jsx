import Profile from './Profile/Profile';
import user from './Profile/user.json';
import Statistics from './Statistics/Statistics';
import stats from './Statistics/stats.json';
import FriendsList from './FriendsList/FriendsList';
import friends from './FriendsList/friends.json';
import TransactionsTable from './Transactions/TransactionsTable';
import transactions from './Transactions/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        gap: '20px',
      }}
    >
      <Statistics title="Upload stats" stats={stats} />
      <FriendsList friends={friends} />
      <TransactionsTable transactions={transactions} />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};
