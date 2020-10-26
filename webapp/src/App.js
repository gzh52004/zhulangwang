// 引入依赖
import React from 'react';
import {Route, Switch, Redirect,Link} from 'react-router-dom';

// 引入子组件
import Reg from './components/Reg';
import Login from './components/Login';
import Home from './components/Home';
import BookShelf from './components/Bookshelf';
import Money from './components/Money';
import Man from './components/Man';
import Woman from './components/Woman';
import Client from './components/Client';

let App =  (props) => {
   const menu = [
      {
         id: 1,
         title: '首页',
         path: '/home',
         name: 'home',
         component: Home,
      },
      {
         id: 2,
         title: '书架',
         path: '/bookShelf',
         name: 'bookShelf',
         component: BookShelf,
      },
      {
         id: 3,
         title: '充值',
         path: '/money',
         name: 'money',
         component: Money,
      },
      {
         id: 4,
         title: '男生',
         path: '/man',
         name: 'man',
         component: Man,
      },
      {
         id: 5,
         title: '女生',
         path: '/woman',
         name: 'woman',
         component: Woman,
      },
      {
         id: 6,
         title: '客户端',
         path: '/client',
         name: 'client',
         component: Client,
      },
   ];

   return ( 
      <div>
         <ul>
            {
               // 编程式导航,点击跳转到对应子路由页面
               menu.map(item => 
               <li key={item.id} onClick={()=>{props.history.push(item.path)}}>{item.title}</li> )
               // <li key={item.id}><Link to={item.path}>{item.title}</Link></li>)
            }
         </ul>
         {/* 渲染子路由组件页面 */}
         <Switch>
            {
               menu.map(item => <Route key={item.id} path={item.path} component={item.component} /> )
            }
            <Route path='/Reg' component={Reg} />
            <Route path='/login' component={Login} />
            <Route path='/notfound' render={() => <div>404页面</div>} />
            <Redirect from='/' to='/home' exact />
            <Redirect to='/notfound' />
         </Switch>
      </div>
   )
};

// 导出此组件
export default App;