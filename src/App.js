import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Cart from './Cart';
import LoginPage from './LoginPage';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
      console.log("user is", authUser);
      if(authUser){
        //the user logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else{
        //user logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route exact path="/">
          <Header/>
          <Home/>
          </Route>
          <Route path="/cart">
            <Header/>
            <Cart/>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
