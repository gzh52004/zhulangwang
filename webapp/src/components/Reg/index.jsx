// 引入依赖
import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { UserOutlined, HomeOutlined } from '@ant-design/icons';
import request from '../../utils/request';
import { message, Button, Space } from 'antd';

import 'antd-mobile/dist/antd-mobile.css';
import './style.scss';

class Reg extends React.Component {

   async componentDidMount() {
      // const data = await request.get("/checkname");
      const data = await request.get("/checkname", {
         params: {
            name: "李丹"
         }
      })
     
      const phone = document.getElementById("phone");
      
      phone.onblur = function(){
         const reg = /^[1][3578]\\d{9}$/;
         if(!reg.test(phone.value)){
            console.log(333);
            return
         }
      }

   }

   render() {
      return (
         <div className="reg">
            <div className="top">
               <NavBar
                  icon={<Icon type="left" onClick={() => this.props.history.push("/login")} />}
                  rightContent={[<HomeOutlined key="1" onClick={() => this.props.history.push("/home")} />]}
               >注册</NavBar>
            </div>
            <ul>
               <li>
                  <label>手机号</label>
                  <input 
                  type="text" id="phone" placeholder="请填写正确的手机号" />
               </li>
               <li>
                  <label>密 码</label>
                  <input type="password" id="pass" placeholder="建议6-12位数字符号和字母的组合" />
               </li>
            </ul>
            <button id="btn" >注册</button>
            <div className="log">
               已有账号,
               <div className="login" onClick={() => {this.props.history.push('/login')}}>立即登录</div>
            </div>
            <div className='auth-reg'>
               <h2><span>合作网站账号登录</span></h2>

            </div>
            <div className='auth-btn'>
               <p>
                  <img src="https://s.zhulang.com/wap/pub/v2/style/img/auth-qq.png" alt="" />
                  <img src="https://s.zhulang.com/wap/pub/v2/style/img/auth-wb.png" alt="" />
               </p>
            </div>
         </div>
      )
   }
}

// 导出此组件
export default Reg;
