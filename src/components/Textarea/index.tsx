import { Dispatch, SetStateAction } from 'react';

import './index.scss';

interface TextareaProps {
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  customClass?: string;
}

const Textarea = (props: TextareaProps): JSX.Element => {
  const { placeholder, value, setValue, customClass } = props;

  return (
    <textarea
      className={`textarea ${customClass ? customClass : ''}`}
      value={value}
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
    ></textarea>
  );
};

export { Textarea };
