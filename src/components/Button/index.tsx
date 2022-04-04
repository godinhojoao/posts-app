import './index.scss';

interface ButtonProps {
  title: string;
  isDisabled?: boolean;
  isSecundary?: boolean;
  handleClick: (event: any) => void;
}

const Button = (props: ButtonProps): JSX.Element => {
  const { title, handleClick, isDisabled, isSecundary } = props;

  return (
    <button
      className={`button ${isDisabled ? 'button--disabled' : ''} ${isSecundary ? 'button--secundary': ''}`}
      disabled={isDisabled}
      onClick={(event) => handleClick(event)}
    >
      {title}
    </button>
  );
};

export { Button };
