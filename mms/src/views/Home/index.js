import { Component } from "react";
import React from 'react';
import request from '../../utils/request'
import { Menu,Button,Row,Col,Divider,PageHeader,Descriptions,Dropdown, message,} from 'antd';
import {AppstoreOutlined, MenuUnfoldOutlined, MenuFoldOutlined, PieChartOutlined, DesktopOutlined,ContainerOutlined, MailOutlined,DownOutlined,} from '@ant-design/icons';

import './style.scss';

const { SubMenu } = Menu;
const onClick = ({ key }) => {
    // message.info(`Click on item ${key}`);
};



const cancel = function(){
    // localStorage.removeItem('userInfo');
    console.log(222);
}

const menu = (
    <Menu onClick={onClick}>
        <Menu.Item key="1" onClick={cancel}>退出</Menu.Item>
        <Menu.Item key="2">修改用户信息</Menu.Item>
        {/* <Menu.Item key="3">3rd menu item</Menu.Item> */}
    </Menu>
);

class Home extends React.Component {

    state = {
        collapsed: false,
    };

    componentDidMount(){
        console.log(11);
    }

     // 对本地信息token进行验证，如果没有或者不对就退出到登录页面
    async componentDidMount(){
        let token = localStorage.getItem('userInfo') || sessionStorage.getItem('userInfo');
        if(!token){
            this.props.history.push('/login');
            return
        }
        // 通过正则将密钥的双引号去掉
        let reg = new RegExp('"',"g");
        token = token.replace(reg, "");
        // console.log(token,111);
        const {data} = await request.get('/user/verify',{
            params:{
                token,
            }
        })
        // console.log(data,222);
        if(!data.code){
            this.props.history.push('/login');
        }

    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div className='home-box'>

                {/* 头部标题 */}
                <section className='title-top'>
                    <PageHeader
                        className='top-left-title'
                        ghost={false}
                        // onBack={() => window.history.back()}
                        title="逐浪小说后台管理系统"
                    // subTitle="This is a subtitle"
                    >
                        <Dropdown overlay={menu} className='top-rigth-title'>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                设置 <DownOutlined />
                            </a>
                        </Dropdown>

                    </PageHeader>
                </section>

                {/* 后台功能 */}
                <section className='menu-homes' style={{ width: 256 }}>
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={this.state.collapsed}
                    >
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                            用户管理
              </Menu.Item>
                        <Menu.Item key="2" icon={<DesktopOutlined />}>
                            书籍管理
              </Menu.Item>
                        <Menu.Item key="3" icon={<ContainerOutlined />}>
                            超级管理员
              </Menu.Item>
                        <Menu.Item key="4" icon={<ContainerOutlined />}>
                            订单管理
              </Menu.Item>
                        <Menu.Item key="5" icon={<ContainerOutlined />}>
                            评论管理
              </Menu.Item>

                    </Menu>
                </section>


            </div >
        );
    }
}



export default Home;