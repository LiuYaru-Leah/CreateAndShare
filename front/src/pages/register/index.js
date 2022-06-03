import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TextField, Alert, Button, ButtonGroup, Snackbar } from '@mui/material';
import withNavigate from '../../components/withNavigate';
import { register } from '../../api/user';
import { LoginWrapper, LoginBox } from './style';

class Register extends PureComponent {
  state = {
    username: '',
    password: '',
    password2: '',
    usernameError: null,
    passwordError: null,
    password2Error: null,
    message: '',
    open: false,
  };
  handleLogin() {
    const { navigate } = this.props;
    navigate('/login');
  }

  handleRegister() {
    const { username, password, password2 } = this.state;
    if (!username) {
      this.setState({ usernameError: 'Please enter your username' });
      return;
    }
    if (!password) {
      this.setState({ passwordError: 'Please enter your password' });
      return;
    }
    if (!password2) {
      this.setState({ password2Error: 'Please enter the confirmation password' });
      return;
    }
    if (password !== password2) {
      this.setState({ password2Error: 'Password inconsistency' });
      return;
    }

    register({
      username,
      password,
    }).then((resp) => {
      if (resp?.success) {
        this.setState({
          message: 'Registration is successful',
          open: true,
          username: '',
          password: '',
          password2: '',
          usernameError: null,
          passwordError: null,
          password2Error: null,
        });
      } else {
        this.setState({
          message: resp?.message,
          open: true,
        });
      }
    });
  }
  render() {
    const {
      usernameError,
      passwordError,
      password2Error,
      open,
      message,
      username,
      password,
      password2,
    } = this.state;

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
            value={username}
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
            value={password}
            onChange={(e) => {
              this.setState({
                password: e.target.value,
                passwordError: null,
              });
            }}
          />

          <TextField
            type="password"
            id="password2"
            label="confirm password"
            variant="outlined"
            error={password2Error}
            margin="normal"
            style={{ width: 240 }}
            helperText={password2Error}
            value={password2}
            onChange={(e) => {
              this.setState({
                password2: e.target.value,
                password2Error: null,
              });
            }}
          />

          <ButtonGroup>
            <Button
              onClick={() => this.handleRegister()}
              variant="contained"
              style={{ width: 120, margin: '24px 0' }}
            >
              Register
            </Button>

            <Button
              onClick={() => this.handleLogin()}
              variant="Outlined"
              style={{ width: 120, margin: '24px 0' }}
            >
              To Login
            </Button>
          </ButtonGroup>
        </LoginBox>
      </LoginWrapper>
    );
  }
}

const mapState = (state) => ({});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(withNavigate(Register));
