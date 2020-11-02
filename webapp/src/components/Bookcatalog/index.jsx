import React,{Component} from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { Accordion, List } from 'antd-mobile';
import { BackTop } from 'antd';

import { Collapse } from 'antd';
import 'whatwg-fetch';


import Home from '../Home/index';
import Login from '../Login/index';

import 'antd-mobile/dist/antd-mobile.css';
// import './bookdetalis.css';
import './style.scss'

// import '../../json/书本数据.json'
import { LeftOutlined, HomeOutlined, SearchOutlined } from '@ant-design/icons';


import creatHistory from 'history/createBrowserHistory';




const history = creatHistory();





class Bookcatalog extends React.Component{


    constructor(props){
        super(props)
        this.state={
           datas:[]
         }
        this.getData=this.getData.bind(this)
  }
  getData(){
       fetch('../../json/书本数据.json')
       .then(response=>response.json())
       .then(data=>{this.setState({datas:data.data})})
       .catch(e=>{console.log("error")})
  }




    onChange = (key) => {
        console.log(key);
    }


    menu = [
        {
            id: 1,
            title: '首页',
            path: '/home',
            name: 'home',
            component: Home,
        },
        
     ]
  
     data = this.menu.map((item, index) => ({
        path: item.path,
     }));

    // 返回上一页功能
     btnFn=()=>{
        history.goBack();
     }

    // 返回首页的功能
     home_index(){
         this.props.history.push('/home')
     }



    render () {
        return (
            <div>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
                {/* Bookdetalis哈哈哈哈哈 */}
                < NavBar
                    datas={console.log(this.getData,111)}
                    
                    
                    className='top-navbar'
                    mode="dark"
                    icon={< Icon type="left" />}
                    // 点击跳转上一页
                    onLeftClick={this.btnFn}
                    rightContent={
                        [
                            // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,

                            <div className="icons-list"
                                key='1'>
                                <HomeOutlined 
                                // 点击跳转回首页
                                onClick={this.home_index.bind(this)}
                                />
                            </div>

                        ]}
                > 传国工匠</NavBar >
            </div>
        )
    }
}

export default Bookcatalog;