import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './components/Landing';
import Dash from './components/Dash';
import Settings from './components/Settings';
import Login from './components/Login';
import Register from './components/Register';


const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Landing} />
      <Route exact path="/dash" component={Dash} />
      <Route exact path="/settings" component={Settings} />
    </div>
  </BrowserRouter>
)

export default App;
