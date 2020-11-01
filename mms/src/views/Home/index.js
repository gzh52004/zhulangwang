import { Component } from "react";
import React from 'react';
import request from '../../utils/request'

class Home extends React.Component{

    state={}

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
        console.log(data,222)
        if(!data.code){
            this.props.history.push('/login');
        }

    }

    render(){
        return(
            <div>
                Home，主页面
            </div>
        )
    }
}



export default Home;