import Modal from '../../containers/modal.jsx';
import styles from './login.css';
import React from 'react';
import PropTypes from 'prop-types';
import Box from '../box/box.jsx';
import SubmitLoginButton from './submit-login-button.jsx';
import SubmitSetupButton from './submit-setup-button.jsx';
// eslint-disable-next-line no-unused-vars
import connect from 'react-redux/es/connect/connect';
import { closeLoginModal } from '../../reducers/modals';
import classnames from 'classnames';

const inputBox = styles.inputBox;
const inputPhone = styles.inputPhone;
const inputPwd = styles.inputPwd;
const Login = props => (
  <Modal
    className={styles.modalContent}
    contentLabel={props.title}
    id="loginModal"
    onRequestClose={props.onCancel}
  >
    <Box
      className={styles.boxPadding}
    >
      <div
        className={classnames({
          [`${inputBox}`]: true,
          [`${inputPhone}`]: true
        })}
      >
        <input
          className={styles.minInput}
          name="account"
          placeholder="请输入手机号"
          type="text"
        />
      </div><br />
      <div
        className={classnames({
          [`${inputBox}`]: true,
          [`${inputPwd}`]: true
        })}
      >
        <input
          className={styles.minInput}
          name="password"
          placeholder="请输入密码"
          type="password"
        />
      </div><br />
      <SubmitLoginButton className={styles.btnSubmit} />
      <SubmitSetupButton className={styles.setupSubmit} />
    </Box>
  </Modal>
);
Login.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  onCancel: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};
const mapStateToProps = states => ({
  loginError: states.scratchGui.userState.error
})
const mapDispatchToProps = dispatch => ({
  onCancel: () => dispatch(closeLoginModal())
})
// export default Login;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);