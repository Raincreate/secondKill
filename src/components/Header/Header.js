import './Header.css'
import React from 'react'

// 头部样式
export default function Header() {
    return (
        <nav className="head">
            <div className="head">
                <ul className="menu">
                    <li className="first"><a href="javascript:;"><span className="first">首页</span></a></li>
                    <li><a href="javascript:;"><span className="inner">商家入驻</span></a></li>
                    <li><a href="javascript:;"><span className="inner">热点资讯</span></a></li>
                    <li><a href="javascript:;"><span className="inner">社会招聘</span></a></li>
                    <li><a href="javascript:;"><span className="inner">校园招聘</span></a></li>
                    <li><a href="javascript:;"><span className="inner">招采平台</span></a></li>
                    <li><a href="javascript:;"><span className="inner">帮助中心</span></a></li>
                    <li><a href="javascript:;"><span className="inner">举报平台</span></a></li>
                    <li><a href="javascript:;"><span className="inner">分享赚钱</span></a></li>
                    <li className="last"><a href="javascript:;"><span className="last">查快递</span></a></li>
                </ul>
            </div>
        </nav>
    )
}
