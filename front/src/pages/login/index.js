import React, { PureComponent } from 'react';
// import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { TextField, Alert, Button, ButtonGroup, Snackbar } from '@mui/material';
import withNavigate from '../../components/withNavigate';
import { login } from '../../api/user';
import { LoginWrapper, LoginBox } from './style';
import { actionCreators } from './store';
// import Home from '../home';

class Login extends PureComponent {
  state = {
    username: '',
    password: '',
    usernameError: null,
    passwordError: null,
    message: '',
    open: false,
  };
  handleLogin() {
  
    const { username, password } = this.state;
    if (!username) {
      this.setState({ usernameError: 'Please enter your username' });
      return;
    }
    if (!password) {
      this.setState({ passwordError: 'Please enter your password' });
      return;
    }

    const { updateUserInfo, navigate, changeLogin } = this.props;
    login({
      username,
      password,
    }).then((resp) => {
      if (resp?.success) {
        const { userInfo } = resp?.data ?? {};
        changeLogin(true);
        updateUserInfo(userInfo);
        localStorage.setItem('userInfo',JSON.stringify(userInfo))
        
        navigate('/');
      } else {
        this.setState({
          message: resp?.message,
          open: true,
        });
      }
    });
  }

  handleRegister() {
    const { navigate } = this.props;
    navigate('/register');
  }
  render() {
    const { usernameError, passwordError, open, message } = this.state;
    // const { loginStatus } = this.props;
      return (
        <LoginWrapper>
          <Snackbar
            autoHideDuration={1000}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={open}
            onClose={() => this.setState({ open: !open })}
        >
          <Alert severity="error">{message}</Alert>
        </Snackbar>

        <LoginBox>
          <TextField
            id="username"
            label="username"
            variant="outlined"
            error={usernameError}
            margin="normal"
            style={{ width: 240 }}
            helperText={usernameError}
            onChange={(e) => {
              this.setState({
                username: e.target.value,
                usernameError: null,
              });
            }}
          />

          <TextField
            type="password"
            id="password"
            label="password"
            variant="outlined"
            error={passwordError}
            margin="normal"
            style={{ width: 240 }}
            helperText={passwordError}
            onChange={(e) => {
              this.setState({
                password: e.target.value,
                passwordError: null,
              });
            }}
          />

          <ButtonGroup>
            <Button
              onClick={() => this.handleLogin()}
              variant="contained"
              style={{ width: 120, margin: '24px 0' }}
            >
              Login
            </Button>
            <Button
              onClick={() => this.handleRegister()}
              variant="Outlined"
              style={{ width: 120, margin: '24px 0' }}
            >
              Register
            </Button>
          </ButtonGroup>
        </LoginBox>
      </LoginWrapper>
    );
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login']),
  userInfo: state.getIn(['login', 'userInfo']),
});

const mapDispatch = (dispatch) => ({
  changeLogin(value) {
    dispatch(actionCreators.changeLogin(value));
  },
  updateUserInfo(value) {
    dispatch(actionCreators.updateUserInfo(value));
   
  },
  //   login(accountElem, passwordElem) {
  //     dispatch(actionCreators.login(accountElem.value, passwordElem.value));
  //   },
});

export default connect(mapState, mapDispatch)(withNavigate(Login));
