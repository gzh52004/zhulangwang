import logo from './logo.svg';
import React from 'react';
import {Route,Redirect,Switch,Link,NavLink,withRouter} from 'react-router-dom';


import Login from './views/Login';
import Reg from './views/Reg';
import Home from './views/Home';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       App
//     </div>
//   );
// }

class App extends React.Component{
  state = {
    menu:[
      {
        name:"注册",
        path:"/reg",
        name:"reg",
        component:Reg,
      },
      {
        name:"登录",
        path:"/login",
        name:"login",
        component:Login,
      },
      {
        name:"注册",
        path:"/home",
        name:"home",
        component:Home,
      },
      {
        name:"用户管理",
        path:"/user",
        name:"user",
        // component:Uuser,
      }
    ]
  };
  render(){
      const {menu} = this.state

    return(
        <div>

          <Switch>
                { //路由出口
                menu.map(item =><Route 
                key={item.name}
                path={item.path}
                component={item.component} />)
                }
             
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
