import { Dispatch, SetStateAction } from 'react';

import { Button } from '../Button';
import { Input } from '../Input';
import { Textarea } from '../Textarea';

import './index.scss';

interface PostContainerProps {
  title: string;
  isLoading: boolean;
  submitButtonTitle: string;
  postTitle: string;
  postContent: string;
  customClass?: string;
  setPostTitle: Dispatch<SetStateAction<string>>;
  setPostContent: Dispatch<SetStateAction<string>>;
  handleSubmit: () => void;
}

const PostContainer = (props: PostContainerProps): JSX.Element => {
  const {
    title,
    isLoading,
    submitButtonTitle,
    postTitle,
    postContent,
    customClass,
    setPostTitle,
    setPostContent,
    handleSubmit,
  } = props;

  return (
    <section className={`add-post-container ${customClass ? customClass : ''}`}>
      <h3 className="add-post-container__title default-subtitle">{title}</h3>

      <div>
        <p className="add-post-container__paragraph default-paragraph default-paragraph--fs16">
          Title
        </p>

        <Input
          placeholder="Hello world"
          value={postTitle}
          setValue={setPostTitle}
        />
      </div>

      <div>
        <p className="add-post-container__paragraph default-paragraph default-paragraph--fs16">
          Content
        </p>

        <Textarea
          customClass="add-post-container__textarea"
          placeholder="Content here"
          value={postContent}
          setValue={setPostContent}
        />
      </div>

      <footer className="add-post-container__footer">
        <Button
          isDisabled={!postTitle || !postContent || isLoading}
          title={submitButtonTitle}
          handleClick={() => handleSubmit()}
        />
      </footer>
    </section>
  );
};

export { PostContainer };
