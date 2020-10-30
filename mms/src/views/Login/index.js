import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

const layout = {
   labelCol: { span: 6 },
   wrapperCol: { span: 12 },
};
const tailLayout = {
   wrapperCol: { offset: 6, span: 12 },
};

const Login = function () {
   // const onFinish = values => {
   //   console.log('Success:', values);
   // };

   // const onFinishFailed = errorInfo => {
   //   console.log('Failed:', errorInfo);
   // };
   return (
      <div>
         
         <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
         // onFinish={onFinish}
         // onFinishFailed={onFinishFailed}
         >
            <Form.Item
               label="用户名"
               name="Username"
               rules={[{ required: true, message: 'Please input your username!' }]}
            >
               <Input />
            </Form.Item>

            <Form.Item
               label="密码"
               name="Password"
               rules={[{ required: true, message: 'Please input your password!' }]}
            >
               <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
               <Checkbox>免登录</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
               <Button type="primary" htmlType="submit">
                  登录
        </Button>
            </Form.Item>
         </Form>
      </div>
   )
}

export default Login;