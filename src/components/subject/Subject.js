import React from 'react'
import './Subject.css'

export default function Subject() {
    // 这个组件主要是头部下面的限时秒杀的那个功能
    return (
        <div id='subject'>
            <div className='header-wrapper'>
                <ul className='nav'>
                    <li className='focus'>限时秒杀</li>
                </ul>
            </div>
            <div className='banner-group'>
                <img className='banner' src={require('../../img/seckill.jpg')}/>
                <div className='float'>
                    <div className='title'>全场秒杀</div>
                    <div className='chorce'>每日精选好货超低价秒杀，限时限量，全场包邮。</div>
                    <div className='icon-grop'>
                        <div className='icon'>
                            <div className='icon-img' style={{backgroundPosition:'0%,0%'}}></div>
                            <div>48小时发货</div>
                        </div>
                        <div className='icon'>
                            <div className='icon-img' style={{backgroundPosition:'100%,0%'}}></div>
                            <div>全场包邮</div>
                        </div>
                        <div className='icon'>
                            <div className='icon-img' style={{backgroundPosition:'-100%,-200%'}}></div>
                            <div>7天无理由退货</div>
                        </div>
                        <div className='icon'>
                            <div className='icon-img' style={{backgroundPosition:'0%,-200%'}}></div>
                            <div>假一赔百</div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div> 
    )
}
