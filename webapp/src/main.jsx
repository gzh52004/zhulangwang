// 引入依赖
import React from 'react';
import {render} from 'react-dom';
import {HashRouter,BrowserRouter,Route} from 'react-router-dom';

// 引入组件
import App from './App';

// 根据环境不同切换不同的路由
const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;

// 渲染节点或组件
render(
   <Router>
      <Route component={App} />
   </Router>
   ,
   document.querySelector('#app')
)
