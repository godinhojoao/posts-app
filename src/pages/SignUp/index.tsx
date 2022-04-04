import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { login } from '../../actions/auth';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { postsApi } from '../../services/postsApi';

import './index.scss';

const SignUp: React.FC = () => {
  const history = useHistory();
  const [name, setName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const currentName = window.localStorage.getItem('posts-app-name');

    if (currentName) {
      history.push('/dashboard');
    }

    return () => {};
  }, []);

  const handleLogin = async () => {
    setIsLoading(true);

    window.localStorage.setItem('posts-app-name', name);

    const posts = await postsApi.getPosts();

    dispatch(login(name, posts));
    history.push('/dashboard');

    setIsLoading(false);
  };

  return (
    <form onSubmit={() => handleLogin()}>
      <main className="sign-up">
        <section className="sign-up__modal">
          <h1 className="sign-up__modal__title default-subtitle">
            Welcome to CodeLeap network!
          </h1>

          <p className="sign-up__modal__phrase default-paragraph default-paragraph--fs16">
            Please enter your username
          </p>

          <Input placeholder="John Doe" value={name} setValue={setName} />

          <footer className="sign-up__modal__footer">
            <Button
              isDisabled={!name || isLoading}
              title="Enter"
              handleClick={() => handleLogin()}
            />
          </footer>
        </section>
      </main>
    </form>
  );
};

export { SignUp };
