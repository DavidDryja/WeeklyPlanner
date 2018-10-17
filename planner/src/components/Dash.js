import React from 'react';
import { Link } from 'react-router-dom';

import './Dash.css';

class Dash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className="dashHeader">DASH</h1>
        <Link to="/settings">
          <p>Settings</p>
        </Link>
        <Link to="/">
          <p>Landing</p>
        </Link>
      </div>
    )
  }
}

export default Dash;