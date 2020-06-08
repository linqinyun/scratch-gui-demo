import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../button/button.jsx';

import styles from './login-button.css';

const LoginButton = ({
  className,
  onClick
}) => (
    <Button className={classNames(
      className,
      styles.loginButton
    )}
      onClick={onClick}
    >
      <FormattedMessage
        defaultMessage="Login"
        description="Label for login"
        id="gui.menuBar.login"
      />
    </Button>
  );

LoginButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
};

LoginButton.defaultProps = {
  onClick: () => { }
};

export default LoginButton;