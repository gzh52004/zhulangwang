import React from 'react';
import CryptoJS from 'crypto-js';
import { Form, Input, Button, Checkbox } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import request from '../../utils/request'

import './style.scss';



const layout = {
   labelCol: { span: 6 },
   wrapperCol: { span: 6 },
   };
const tailLayout = {
   wrapperCol: { offset: 6, span: 12 },
};

const rules ={
   username:[
       {required: true, message: '用户名和密码不能为空!'},
       {
           async validator(rule, value) {
               //用户名为空不发请求
               if(!value){
                   return
               }
               const {data} =await request.post('/user/manReg',{
                   body:{
                       username:value
                   }    
               });

               if (data.status === 200) {
                 return Promise.resolve();
               }
               return Promise.reject('用户名已存在');
             },

       }
   ],

  

   password:[
       {required: true, message: '密码不能为空!'},
       { min:6 ,max:12, message :'密码长度必须为6-12位字符'}
   ]
}

const Reg = function (props) {
   const onFinish =async (values) => {
     

   };

   // const onFinishFailed = errorInfo => {
   //   console.log('Failed:', errorInfo);
   // };
  
   return (

      <div>
          <div className='reg'>
          
         
         <Form
            {...layout}
            className='regForm'
            name="basic"
            initialValues={{ remember: true }}
         // onFinish={onFinish}
         // onFinishFailed={onFinishFailed}
            style={{
               marginLeft:"400px",
               marginTop:"200px",
               width:'400px',
               padding:'10px 0',
                         
            }}
         >
            <FormItem {...tailLayout}
            style={{fontSize:'25px',fontWeight:'600',marginLeft:'-60px'}}
            >逐浪后台管理系统-注册</FormItem>
            
            <Form.Item
               label="用户名"
               name="Username"
               rules={[{ required: true, message: '用户名不能为空' }]}
               
            >
               <Input style={{width:'200px'}} />
            </Form.Item>

            <Form.Item
               label="密码"
               name="Password"
               rules={[{ required: true, message: '请输入密码' }]}
               

            >
               <Input.Password style={{width:'200px'}} />
            </Form.Item>

            {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
               <Checkbox>下次免登录</Checkbox>
            </Form.Item> */}

            <Form.Item {...tailLayout}>
               <Button type="primary" htmlType="submit" style={{marginRight:'10px'}}>
                  注册
                </Button>
                <Button type="primary" htmlType="submit" onClick={()=>{props.history.push('/login')}}>
                  登录
                </Button>
            </Form.Item>
         </Form>
         </div>
      </div>
   )
}

export default Reg;