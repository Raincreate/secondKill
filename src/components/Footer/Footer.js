import React from 'react'
import './Footer.css'

// 底部的样式
export default function Footer() {
    return (
        <div className="copyright">
            <div className='foot-cr'>
                <span>个人版权所有</span>
                <a href="#">（用于学习的自定义网站）</a>
            </div>
            <div className='foot-medicine'>
                <a href="#">互联网上网个人许可</a>
            </div>
            <div className='foot-record'>
                <a href="#" className='img-wrap'>
                    <div className='record-img'></div>
                    <span>成都郫县 2006号</span>
                </a>
                <span className='record-num'>网上平台</span>
            </div>
        </div>
    )
}
