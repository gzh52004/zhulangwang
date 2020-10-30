import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { Accordion, List } from 'antd-mobile';
import { BackTop } from 'antd';

import { Collapse } from 'antd';

import 'antd-mobile/dist/antd-mobile.css';
// import './bookdetalis.css';
import './style.scss'

import { LeftOutlined, HomeOutlined, SearchOutlined } from '@ant-design/icons';


// class AccordionExmple extends React.Component
// const Bookdetalis = function () {
class Bookdetalis extends React.Component {






    onChange = (key) => {
        console.log(key);
    }
    render() {
        return (
            <div className="bookdedalisbox" >
                {/* Bookdetalis哈哈哈哈哈 */}
                < NavBar
                    className='top-navbar'
                    mode="dark"
                    icon={< Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={
                        [
                            // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,

                            <div className="icons-list"
                                key='1'>
                                <HomeOutlined />
                            </div>

                        ]}
                > 传国工匠</NavBar >
                {/* 头部展示内容区域 */}
                < section className='top-content' >
                    <div className='top-content-left'>
                        <img src="https://i.zhulang.com/xxs_book_cover/image/67/79/677942.jpg" alt="" />
                    </div>
                    <div className='top-content-right'>
                        <h3>传国工匠</h3>
                        <p>
                            <a href="">签约作品</a>
                            <i>|</i>
                            <a href="">许家祥</a>
                        </p>
                        <p>责编：王冬冬</p>
                        <p>5逐浪币/千字</p>
                        <p>20.37万字</p>
                        <div className='top-content-left-text'>
                            <a href="#">短篇</a>
                            <a href="#">全本</a>
                        </div>
                    </div>
                </section >


                {/* 按钮展示区域 */}
                < section className='top-botton-box' >
                    <div className="top-botton-box1">
                        开始阅读
                </div>
                    <div className="top-botton-box2">
                        加入书架
                </div>
                    <div className="top-botton-box3">
                        离线阅读
                </div>
                </section >


                {/* 简介框 */}
                < section className="conten-center-box" >
                    <div className="c-center-topbox">
                        <h2>简介</h2>
                    </div>
                    <div className="c-center-centerbox">
                        中国东南沿海瓯江流域，为了一个七十年前不同寻常的盟约，五家顶级瓯派（温州）匠工的传人在寻找秘笈《瓯宝图》过程中，与境外正邪两大力量之间发生殊死冲突及各派瓯越匠人之间颇有历史渊源的爱恨情仇的传奇。
                        【向新中国成立70周年献礼参赛作品】本书荣...
                    </div>
                    <div className="c-center-botommbox">
                        <p className="c-c-bottombox-a">
                            <a href="#">查看目录</a>
                        </p>
                        <span></span>
                        <p className="c-c-bottombox-c">2019年06月14日更新</p>
                        <p className="c-c-bottombox-d">
                            共79章
                            <span></span>
                        </p>
                    </div>
                </section >

                {/* 打赏框 */}
                <section className="payfor-author-box">
                    <div className="pay-titel-topbox">
                        <h2>粉丝互动</h2>
                    </div>
                    <div className="pay-conten-two">
                        <a href="" className='pay-conten-tow-left'>
                            <span>我要打赏</span>
                            <span>总计18612逐浪币</span>
                        </a>

                        <a href="" className='pay-conten-tow-right'>
                            <span>送朵鲜花</span>
                            <span>共9朵鲜花</span>
                        </a>
                    </div>
                    <div className="user-pay-detalis">
                        {/* <img src="https://s.zhulang.com/wap/pub/v3/style/img/ht-num.png" alt=""/> */}
                        <p className='user-pay-number'>1</p>
                        <p>APP_64962450</p>
                        <p>5888逐浪币</p>
                    </div>
                    <div className="user-pay-detalis">
                        {/* <img src="https://s.zhulang.com/wap/pub/v3/style/img/ht-num.png" alt=""/> */}
                        <p className='user-pay-number'>2</p>
                        <p>APP_64962450</p>
                        <p>5888逐浪币</p>
                    </div>
                    <div className="user-pay-detalis">
                        {/* <img src="https://s.zhulang.com/wap/pub/v3/style/img/ht-num.png" alt=""/> */}
                        <p className='user-pay-number'>3</p>
                        <p>APP_64962450</p>
                        <p>5888逐浪币</p>
                    </div>

                    <div className="show-look-many">
                        <a href="">
                            查看更多
                            <span></span>
                        </a>
                    </div>
                </section>


                {/* 评论区 */}
                <section className="user-comment-box">
                    {/* 头部 */}
                    <div className="user-comment-top">
                        <h2>书评</h2>
                        <p>共99条</p>
                    </div>
                    {/* 中部 */}
                    <div className="user-comment-centen">
                        <img src="https://i.zhulang.com/face/users/68/171/68171061_1582298904_x100.jpg" alt="" />
                        <div className="user-comment-detalis-right">
                            <div className="user-comment-detalis-right-top">
                                <p>
                                    <span>江湖白衣墨煮酒</span>
                                    <span>2020-10-27 15:36:18</span>
                                </p>
                                <p>
                                    <span>花</span>
                                    <span>1朵鲜花</span>
                                </p>
                                <p>这本书真好看，点赞顶起来!</p>
                            </div>
                            <div className="user-comment-detalis-right-bottom">

                                <span>留言 0</span>
                                <span>点赞 1</span>

                            </div>
                        </div>
                    </div>

                    {/* 下部 */}
                    <div className="user-comment-button-down">
                        <a href="">写书评</a>
                        <i>|</i>
                        <a href="">进入书评</a>
                    </div>
                </section>

                {/* 其他作品 */}
                <section className="onther-works-box">
                    <div className="onther-works-top">
                        <h2>陈酿的其他作品</h2>
                        <p>全部2本</p>
                    </div>

                    <div className="onther-works-works">
                        <a href="">
                            <img src="https://i.zhulang.com/xxs_book_cover/image/73/5/730561_x160.jpg" alt="" />
                            <span>酥扎小姐姐的非常朋友圈</span>
                        </a>
                        <a href="">
                            <img src="https://i.zhulang.com/xxs_book_cover/image/65/7/650769_x160.jpg" alt="" />
                            <span>旷世烟火</span>
                        </a>

                    </div>
                </section>

                {/* <section className="app-down-box">
                    <a href="">下载逐浪小说App客户端</a>
                    <span>海量独家小说，完美阅读体验</span>
                </section>

                <section className="login-index-button">
                    <a href="">登录</a>
                    <a href="">^回到顶部</a>
                </section> */}

                <div className='bottom'>
                    <section className="app-down">
                        <a href="" className="app-link">下载逐浪小说App客户端</a>
                        <span>海量独家小说，完美阅读体验</span>
                    </section>
                    <div className='login'>
                        <span>登录</span><em><BackTop style={{ display: 'inline-block' }} />返回顶部</em>
                    </div>
                    <div className='search'>
                        <input type="text" placeholder='搜索书名、作者、分类等' />
                        <i className='magnifier'><SearchOutlined style={{ display: 'inline-block' }} /></i>
                    </div>


                </div>


            </div >
        )
    }
}


// ReactDOM.render(<AccordionExmple />, mountNode);

export default Bookdetalis;