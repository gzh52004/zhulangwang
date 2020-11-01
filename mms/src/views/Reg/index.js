import React from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import request from '../../utils/request.js'
import CryptoJS from 'crypto-js';

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
      {
         // 自定义检验-函数
         async validator(rule, value){
            if(!value){
               return
            }
            // 请求数据
            const {data} = await request.get('/user/checkman',{
               params:{
                  name:value
               }
            })
            console.log(data,111)
            if(data.code){
               return Promise.resolve();
            }
            return Promise.reject('用户名已存在'); //自定义检验自带
         }
      }
   ],
   password:[
      { required: true, message: '请输入密码' },
      { min: 2, max: 12, message: '密码长度只能为6~12位' }
   ],
}

const Reg = function (props) {
   const onFinish = async (values) => {
   //   console.log(values,333);
   // 格式转换
     const value = {
        name:values.Username,
        password:values.Password
     }
   
      // 使用SHA256方法进行加密
      value.password = CryptoJS.SHA256(value.password).toString();
      console.log(value.password,555); //加密后

      const {data} = await request.post('/user/manReg',value);
   //   判断请求数据是否成功
      if(data.code){
         message.success('注册成功');
         props.history.push({
           pathname:'/login',
           state:{name:values.username}
         })
      }
   }

   // const onFinishFailed = errorInfo => {
   //   console.log('Failed:', errorInfo);
   // };
   return (
      <div className="reg">
         <div className="reg-container">
         <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            className="reg-form"
            onFinish={onFinish}
         // onFinishFailed={onFinishFailed}
         >
            <h2 className="reg-title">账号注册</h2>
            <Form.Item
               label="用户名"
               name="Username"
               placeholder="请输入用户名"
               rules={rules.username}
            >
               <Input />
            </Form.Item>

            <Form.Item
               label="密码"
               name="Password"
               rules={rules.password}
            >
               <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
               <Button type="primary" htmlType="submit" onClick={() => {
                  props.history.push('/login')
               }}>
                  登录
               </Button>
               <Button type="primary" htmlType="submit">
                  注册
               </Button>
            </Form.Item>
         </Form>
      </div>
      </div>
      
   )
}

export default Reg;