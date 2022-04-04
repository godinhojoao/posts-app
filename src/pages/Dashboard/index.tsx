import { Fragment, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { MainState } from '../../types/mainState.interface';
import { PostCard } from '../../components/PostCard';
import { PostContainer } from '../../components/PostContainer';

import { login } from '../../actions/auth';
import { postsApi } from '../../services/postsApi';

import './index.scss';

const Dashboard = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let name = useSelector(
    (state: { auth: MainState }) => state && state.auth && state.auth.name
  );
  const posts = useSelector(
    (state: { auth: MainState }) => state && state.auth && state.auth.posts
  );
  const [postTitle, setPostTitle] = useState<string>('');
  const [postContent, setPostContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    name = name ? name : window.localStorage.getItem('posts-app-name');

    if (!name) {
      navigate('sign-up');
    } else {
      (async () => {
        if (!isLoading) {
          window.localStorage.setItem('posts-app-name', name);

          const posts = await postsApi.getPosts();
          dispatch(login(name, posts));
        }
      })();
    }
  }, [name, isLoading]);

  async function handleCreatePost() {
    setIsLoading(true);
    await postsApi.createPost({
      title: postTitle,
      content: postContent,
      username: name as string,
      created_datetime: new Date().toISOString(),
    });

    setPostTitle('');
    setPostContent('');
    setIsLoading(false);
  }

  return (
    <main className="dashboard">
      <PostContainer
         title='What’s on your mind?'
         isLoading={isLoading}
         submitButtonTitle='Create'
         postTitle={postTitle}
         postContent={postContent}
         setPostTitle={setPostTitle}
         setPostContent={setPostContent}
         handleSubmit={handleCreatePost}
        />

      {posts &&
        posts.results &&
        posts.results.length &&
        posts.results.map((post) => (
          <Fragment key={post.id}>
            <PostCard post={post} isLoading={isLoading} setIsLoading={setIsLoading} />
          </Fragment>
        ))}
    </main>
  );
};

export { Dashboard };
