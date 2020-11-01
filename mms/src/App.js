import logo from '@/logo.svg';
import React from 'react';
import {Route,Redirect,Switch,Link,NavLink,withRouter} from 'react-router-dom';

import './App.css';

import Home from './views/Home';
import Login from './views/Login';
import Reg from './views/Reg';

class App extends React.Component{
  state = {};
  render(){
    return(
      <div>
        <Switch>
          <Route path='/home' component={Home}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/reg' component={Reg}></Route>
          <Route path='/notfound' render={()=> <div>404</div>} />
          <Redirect from='/' to='/home' exact />
          <Redirect to='/notfound'/>
        </Switch>
      </div>
    )
  }
}

export default App;
