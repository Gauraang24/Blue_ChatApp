import { Switch, BrowserRouter } from 'react-router-dom';
import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';
import SignIn from './pages/SignIn';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/signin">
          <SignIn />
        </PublicRoute>
        <PrivateRoute path="/">
          <Home/>
        </PrivateRoute>
        {/* <Route path="/">Home</Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
