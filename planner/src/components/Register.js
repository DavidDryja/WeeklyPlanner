import React from 'react'

import img from './logo.png'
import styles from './Login.module.css';

class Login extends React.Component {
  componentDidMount(){
    document.title = "Login"
  }

  render() {
    return (
      <div className={styles.loginContain}>
        <img src={img} className={styles.logo} alt="Paradise Planner" />
        <form className={styles.loginForm}>
          <input placeholder="Username" />
          <input placeholder="Password" type="password" />
          <button type="submit">Sign up</button>
        </form>
      </div>
    )
  }
}

export default Login
