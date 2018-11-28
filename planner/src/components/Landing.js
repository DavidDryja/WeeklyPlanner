import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Landing.module.css';
import Login from './Login';
import Register from './Register';

class Landing extends React.Component {
  state = {
    login: true
  }

  handleChange = () => {
    this.setState({ login: !this.state.login })
  }

  render() {
    return (
      <div className={styles.contain}>
        {this.state.login
          ? <Login />
          : <Register />
        }
        <p onClick={this.handleChange}>
          {this.state.login
            ? 'Dont have an account? Sign up.'
            : 'Already have an account? Sign in.'
          }
        </p>
      </div>
    )
  }
}

export default Landing;
