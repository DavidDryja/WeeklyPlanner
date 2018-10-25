import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Landing.module.css';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className={styles.landingHeader}>LANDING</h1>
        <Link to="/settings">
          <p>Settings</p>
        </Link>
        <Link to="/dash">
          <p>Dash</p>
        </Link>
      </div>
    )
  }
}

export default Landing;