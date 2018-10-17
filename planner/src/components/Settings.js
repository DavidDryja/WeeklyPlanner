import React from 'react';
import { Link } from 'react-router-dom';

import './Settings.css';

class Settings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className="settingsHeader">SETTINGS</h1>
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