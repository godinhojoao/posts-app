import { Dispatch, SetStateAction, useState } from 'react';

import { Post } from '../../types/post.interface';
import { Modal } from '../Modal';
import { Alert } from '../Alert';
import { PostContainer } from '../PostContainer';

import { postsApi } from '../../services/postsApi';

import './index.scss';
import { formatDateDifference } from '../../shared/formatDateDifference';

interface PostCardProps {
  post: Post;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const PostCard = (props: PostCardProps): JSX.Element => {
  const { post, isLoading, setIsLoading } = props;
  const [isAlertVisible, setIsAlertVisible] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [postTitle, setPostTitle] = useState<string>(post.title);
  const [postContent, setPostContent] = useState<string>(post.content);
  const humanizedDateDifference = formatDateDifference(
    new Date(),
    post.created_datetime
  );

  async function removePost() {
    setIsLoading(true);

    if (post.id) {
      try {
        await postsApi.removePost(post.id);
        setIsAlertVisible(false);
      } catch (error) {
        setIsAlertVisible(false);
      }
    }

    setIsLoading(false);
  }

  async function editPost() {
    setIsLoading(true);

    try {
      await postsApi.editPost({
        ...post,
        title: postTitle,
        content: postContent,
      });
      setIsEditing(false);
    } catch (error) {
      setIsEditing(false);
    }

    setIsLoading(false);
  }

  return (
    <>
      <section className="post-card">
        <header className="post-card__header">
          <h3 className="default-subtitle default-subtitle--white">
            {post.title}
          </h3>

          <div className="post-card__header__icons">
            <img
              src="src/assets/remove-icon.svg"
              alt="Remove post"
              onClick={() => setIsAlertVisible(true)}
            />
            <img
              src="src/assets/edit-icon.svg"
              alt="Edit post"
              onClick={() => setIsEditing(true)}
            />
          </div>
        </header>
        <main className="post-card__content">
          <header className="post-card__content__header">
            <p className="post-card__content__header__author">
              @{post.username}
            </p>
            <p className="post-card__content__header__time">
              {humanizedDateDifference} ago
            </p>
          </header>

          <div className="default-paragraph default-paragraph--fs18">
            {post.content.split('\n').map((phrase, i) => (
              <p key={'phrase' + i}>{phrase}</p>
            ))}
          </div>
        </main>
      </section>

      <Modal
        handleclickOutside={() => setIsAlertVisible(false)}
        isVisible={isAlertVisible}
      >
        <Alert
          alertContent="Are you sure you want to delete this item?"
          handleCancel={() => setIsAlertVisible(false)}
          handleOk={() => removePost()}
        />
      </Modal>
      <Modal
        handleclickOutside={() => setIsEditing(false)}
        isVisible={isEditing}
      >
        <PostContainer
          title="Edit item"
          submitButtonTitle="Save"
          customClass="edit-post-container"
          isLoading={isLoading}
          postTitle={postTitle}
          postContent={postContent}
          setPostTitle={setPostTitle}
          setPostContent={setPostContent}
          handleSubmit={editPost}
        />
      </Modal>
    </>
  );
};

export { PostCard };
