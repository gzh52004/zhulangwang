import React from 'react';
import { Form, Input, Button, Checkbox,message } from 'antd';
import request from '../../utils/request';
import CryptoJS from 'crypto-js';//引入加密模块

import './style.scss';

const layout = {
   labelCol: { span: 8 },
   wrapperCol: { span: 16 },
};
const tailLayout = {
   wrapperCol: { offset: 8, span: 16 },
};

// 提取用户名和密码等数据的方法
const rules = {
   username:[
      { required: true, message: '请输入用户名' },
   ],
   password:[
      { required: true, message: '请输入密码' },
      { min: 2, max: 12, message: '密码长度只能为6~12位' }
   ],
}

const Login = function (props) {
   const onFinish = async (values) => {
      if(!values){
         return
      }
      // 格式转换
      const value = {
         name:values.Username,
         password:values.Password
      }
      // 对输入的密码用SHA256方式进行单向加密
      value.password = CryptoJS.SHA256(value.password).toString();
      console.log(value.password,123);

      // 请求回来数据，判断是否登录成功
      const {data} = await request.get('/user/manLog',{
         params:value
      });
      // console.log(data,222);
      if(data.code){
         // 本地储存用户名和密钥
         if(values.remember){
            localStorage.setItem('userInfo',JSON.stringify(data.token))
         }else{
            sessionStorage.setItem('userInfo',JSON.stringify(data.token))
         }
         message.success('登录成功');
         props.history.push({
           pathname:'/home',
         })
         console.log(props,333)
      }else{
         message.error('用户名或密码有误');
      }
      
   };

   // const onFinishFailed = errorInfo => {
   //   console.log(777);
   // };
   return (
      <div className="login">
         <div className="login-container">
         <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            className="login-form"
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
         >
            <h2 className="login-title">账号登录</h2>
            <Form.Item
               label="用户名"
               name="Username"
               placeholder="请输入用户名"
               rules={rules.username}
               hasFeedback
            >
               <Input />
            </Form.Item>

            <Form.Item
               label="密码"
               name="Password"
               rules={rules.password}
               hasFeedback
            >
               <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
               <Checkbox>下次免登录</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
               <Button type="primary" htmlType="submit" onClick={() => {
                  props.history.push('/reg')
               }}>
                  注册
               </Button>
               <Button type="primary" htmlType="submit">
                  登录
               </Button>
            </Form.Item>
         </Form>
      </div>
      </div>
      
   )
}

export default Login;