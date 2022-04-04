import { Dispatch, SetStateAction } from 'react';

import './index.scss';

interface InputProps {
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const Input = (props: InputProps): JSX.Element => {
  const { placeholder, value, setValue } = props;

  return (
    <input
      className="input"
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export { Input };
