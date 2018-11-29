import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Settings.module.css';

class Settings extends React.Component {
  render() {
    return (
      <div>
        <h1 className={styles.settingsHeader}>SETTINGS</h1>
        <Link to="/dash">
          <p>Dash</p>
        </Link>
        <Link to="/">
          <p>Landing</p>
        </Link>
      </div>
    )
  }
}

export default Settings;
