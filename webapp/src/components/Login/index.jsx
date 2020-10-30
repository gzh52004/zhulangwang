// 引入依赖
import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { UserOutlined,HomeOutlined,LockOutlined} from '@ant-design/icons';


import 'antd-mobile/dist/antd-mobile.css';
import './style.scss';

const Login = function (props) {
   return (
      <div>
         <NavBar
            // mode="dark"
            icon={<Icon type="left" />}
            rightContent={[
               <HomeOutlined key="1" onClick={()=>{props.history.push('/home')}} />
            ]}
         >登录逐浪网</NavBar>
         <div className='login'>
            <ul>
               <li><i><UserOutlined /></i><input type="text" placeholder='用户名/手机号'/></li>
               <li><i><LockOutlined /></i><input type="password" placeholder='请输入密码'/></li>
            </ul>
            <p><span>登录</span></p>
            <b><i>立即注册</i><i>忘记密码</i></b>
         </div>
         
         <div className='auth-log'>
            <h2><span>合作网站账号登录</span></h2>

         </div>
         <div className='auth-btn'>
            <p>
               <img src="https://s.zhulang.com/wap/pub/v2/style/img/auth-qq.png" alt=""/>
               <img src="https://s.zhulang.com/wap/pub/v2/style/img/auth-wb.png" alt=""/>
               </p>
         </div>
      </div>
   )
}

// 导出此组件
export default Login;