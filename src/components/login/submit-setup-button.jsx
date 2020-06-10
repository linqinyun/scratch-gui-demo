import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../button/button.jsx';
import styles from './login.css';
const SubmitSetupButton = ({
  className,
  onClick
}) => (
    <div>
      <Button
        className={classNames(
          className,
          styles.SubmitSetupButton
        )}
        onClick={onClick}
      >
        <FormattedMessage
          defaultMessage="注册"
          description="Label for submit login"
          id="gui.loginModal.submitLogin"
        />
      </Button>
    </div>
  );
SubmitSetupButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
};
SubmitSetupButton.defaultProps = {
  onClick: () => { }
};
export default SubmitSetupButton;