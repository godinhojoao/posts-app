import { Button } from '../Button';

import './index.scss';

interface AlertProps {
  alertContent: string;
  handleCancel: (event: any) => void;
  handleOk: (event: any) => void;
}

const Alert = (props: AlertProps): JSX.Element => {
  const { alertContent, handleCancel, handleOk } = props;

  return (
    <div className="alert-container">
      <p className="alert-container__content">{alertContent}</p>
      <footer className="alert-container__footer">
        <Button
          title="Cancel"
          handleClick={(e) => handleCancel(e)}
          isSecundary={true}
        />
        <Button
          title="OK"
          handleClick={(e) => handleOk(e)}
          isSecundary={true}
        />
      </footer>
    </div>
  );
};

export { Alert };
