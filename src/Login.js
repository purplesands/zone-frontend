import React from 'react';
import { connect } from 'react-redux';
import { url } from './helpers';


class Login extends React.Component {

  state= {
    username: '',
    password: ''
  }

  handleSubmit = (e) => {
    const store = require('store')
      e.preventDefault();
      fetch(`${url}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
  				"Accepts": "application/json",
        },
        body:JSON.stringify({
          username: this.state.username,
          password:this.state.password
        })
      }).then(r=>r.json())
      .then(r=>{
        if (r.errors) {
          alert(r.errors)
        } else {
      this.props.dispatch({ type: "UPDATE_USER", payload:r.user})
      store.set('jwt', r.jwt);
      // this.props.history.push(`/users/${r.user.id}`)
      this.setState({username:'',password:''})
    }
  })
}



  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>  <input
              className="login"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              placeholder="username"
            />  </p>
            <p>  <input
              className="login"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="password"
            /></p>

          <button type="submit" value="login">ok</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser:state.currentUser
  }
}

const HOC = connect(mapStateToProps)
export default HOC(Login);
