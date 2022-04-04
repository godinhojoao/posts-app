import {
  BrowserRouter as Router,
  Switch as RoutesSwitch,
  Route,
  Redirect,
} from 'react-router-dom';

import { SignUp } from './pages/SignUp';
import { Dashboard } from './pages/Dashboard';

const Routes = () => {
  return (
    <Router>
      <RoutesSwitch>
        <Route exact path="/sign-up" component={() => <SignUp />} />
        <Route exact path="/dashboard" component={() => <Dashboard />} />
        <Route component={() => <Redirect to={{ pathname: '/sign-up' }} />} />
      </RoutesSwitch>
    </Router>
  );
};

export { Routes };
