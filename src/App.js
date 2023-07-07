import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import ChatRoom from './components/ChatRoom';

const App = () => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      {!loggedIn ? (
        <div>
          <LoginForm />
          <RegistrationForm />
        </div>
      ) : (
        <ChatRoom user={user} />
      )}
    </div>
  );
};

export default App;
