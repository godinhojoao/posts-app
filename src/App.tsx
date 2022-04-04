import { Provider } from 'react-redux';

import { store } from './redux/store';
import { Routes } from './routes';
import { Header } from './components/Header';

import './styles/main.scss';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Routes />
    </Provider>
  );
}

export { App };
