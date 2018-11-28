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
        <img src={img} className={styles.logo} />
        <form className={styles.loginForm}>
          <input placeholder="Username" />
          <input placeholder="Password" type="password" />
          <button type="submit">Sign in</button>
        </form>
      </div>
    )
  }
}

export default Login
