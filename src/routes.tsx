import {
  BrowserRouter as Router,
  Routes as RoutesSwitch,
  Route,
} from 'react-router-dom';

import { NotFound } from './pages/NotFound';
import { SignUp } from './pages/SignUp';
import { Dashboard } from './pages/Dashboard';

const Routes = () => {
  return (
    <Router>
      <RoutesSwitch>
        <Route path="*" element={<NotFound />} />

        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </RoutesSwitch>
    </Router>
  );
};

export { Routes };
