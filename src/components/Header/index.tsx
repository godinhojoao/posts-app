import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../../actions/auth';
import { MainState } from '../../types/mainState.interface';

import exitIcon from '../../assets/exit-icon.svg';

import './index.scss';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const name = useSelector(
    (state: { auth: MainState }) => state && state.auth && state.auth.name
  );
  const [isLogoutVisible, setIsLogoutVisible] = useState(false);

  useEffect(() => {
    const currentName = name ? name : window.localStorage.getItem('posts-app-name');
    if (currentName) {
      setIsLogoutVisible(true);
    }
  }, [name]);

  function handleLogout() {
    window.localStorage.removeItem('posts-app-name');
    dispatch(logout());
    window.location.href = '/sign-up';
  }

  return (
    <header id="top" className="header">
      <h1 className="default-subtitle default-subtitle--white">
        CodeLeap Network
      </h1>

      {isLogoutVisible && (
        <img
          onClick={() => handleLogout()}
          src={exitIcon}
          alt="Exit"
        />
      )}
    </header>
  );
};

export { Header };
