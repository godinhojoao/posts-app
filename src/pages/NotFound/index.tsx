import { Navigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  return <Navigate to="/sign-up" />;
};

export { NotFound };
