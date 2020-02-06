import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/action';
import './LoginForm.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    let { email, password } = this.state;
    let { isLoginPending, isLoginSuccess, loginError } = this.props;
    return (
      <div className="login-form-appiness">

      <div className="card text-center">

      <form className="loginForm card-body" onSubmit={this.onSubmit}>
        <div className="form-group-collection">
          <div className="form-group">
          <label className="font-weight-bolder">E-MAIL ADDRESS</label>
            <input type="email" name="email" class="form-control" onChange={e => this.setState({ email: e.target.value })} value={email} />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>

          <div className="form-group">
            <label className="font-weight-bolder">PASSWORD</label>
            <input type="password" name="password"  class="form-control"  onChange={e => this.setState({ password: e.target.value })} value={password} />
          </div>
        </div>

        <input class="btn btn-primary" type="submit" value="Login" />

        <div className="message ">
          {isLoginPending && <div className="alert alert-warning">Please wait...</div>}
          {isLoginSuccess && <div className="alert alert-success">Success.</div>}
          {loginError && <div className="alert alert-danger">{loginError.message}</div>}
        </div>
      </form>
      </div>
      </div>
    );
  }

  onSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.login(email, password, res => {
      this.props.history.push(`/Employee`);
    });
    this.setState({
      email: '',
      password: ''
    });
  }
}

const mapStateToProps = state => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password, callback) => dispatch(login(email, password, callback))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);