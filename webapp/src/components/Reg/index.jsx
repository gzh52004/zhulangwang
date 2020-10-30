// 引入依赖
import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { UserOutlined, HomeOutlined } from '@ant-design/icons';


import 'antd-mobile/dist/antd-mobile.css';
import './style.scss';

const Reg = function () {
   return (
      <div>
         <div className="top">
            <NavBar
               icon={<Icon type="left" />}
               rightContent={[<HomeOutlined key="1" />]}
            >注册</NavBar>
         </div>
         <div className="nav"></div>
      </div>
   )
}

// 导出此组件
export default Reg;
