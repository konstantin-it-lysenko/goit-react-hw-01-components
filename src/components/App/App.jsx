import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import { Container } from './App.styled';

const App = () => {
  return (
    <Container>
      <Profile />
      <Statistics />
      <FriendList />
    </Container>
  );
};

export default App;
