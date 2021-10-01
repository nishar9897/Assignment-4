import { Fragment } from 'react';
import './App.css';

import Auth from './components/Auth';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import Algo from './components/algo';
import { useSelector } from "react-redux";
import { Route } from 'react-router-dom'

function App() {
  const isAuth = useSelector(state => state.isAuthenticated);
  return (
    <div className="App">
      <main>
          <Route path='/' >
            <Header /> 
          </Route>
          <Route path='/bots-details/:id/' component={Algo}>
          </Route>
      </main>
      <Fragment>
        {!isAuth && <Auth />}
        {isAuth &&  <Route path='/bots' exact >
            <UserProfile /> 
          </Route>}
      </Fragment>
    </div>
   
  );
}

export default App;
