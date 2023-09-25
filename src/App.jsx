import { Switch, BrowserRouter } from 'react-router-dom';
import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';
import SignIn from './pages/SignIn';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Home from './pages/Home';
import { ProfileProvider } from './context/profileContext';

function App() {
  return (
    <BrowserRouter>
    <ProfileProvider>
      <Switch>
        <PublicRoute path="/signin">
          <SignIn />
        </PublicRoute>
        <PrivateRoute path="/">
          <Home/>
        </PrivateRoute>
        {/* <Route path="/">Home</Route> */}
      </Switch>
      </ProfileProvider>
    </BrowserRouter>
  );
}

export default App;
