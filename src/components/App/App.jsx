import { Container } from './App.styled';
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import transactions from 'JSON/transactions.json';
import 'globalstyles.css';

const App = () => {
  return (
    <Container>
      <Profile />
      <Statistics />
      <FriendList />
      <TransactionHistory items={transactions} />
    </Container>
  );
};

export default App;
