import { Button } from 'semantic-ui-react';

import { useAuth } from '../../contexts/AuthContext';
import AppHeader from './Header.styles';

const Header = () => {
  const { currentUser, logout } = useAuth();

  return (
    <AppHeader>
      <div className="brand">
        <div className="brand-logo">
          <img
            src="https://deepeddypsychotherapy.com/wp-content/uploads/2016/06/cropped-dep-square-270x270.png"
            alt="Logo"
            width="45"
            height="45"
          />
        </div>

        <span className="brand-name">i2iTherapy MVP</span>
      </div>

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
