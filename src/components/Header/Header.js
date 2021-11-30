import { Button } from 'semantic-ui-react';

import { useAuth } from '../../contexts/AuthContext';
import AppHeader from './Header.styles';

const Header = () => {
  const { currentUser, logout } = useAuth();

  return (
    <AppHeader>
      <span className="app-name">i2iTherapy Assignment</span>

      <div className="user-container">
        <div className="user-info">
          <span className="logged-text">
            Logged in as <span className="user-name">{currentUser?.email}</span>
          </span>
        </div>

        <Button color="teal" onClick={logout}>
          Logout
        </Button>
      </div>
    </AppHeader>
  );
};

export default Header;
