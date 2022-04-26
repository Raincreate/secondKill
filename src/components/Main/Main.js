import React from 'react'
import './Main.css'
import T from '../Time/Time'

export default function Main() {
    // 这个函数的作用是显示弹窗
    const handleKill= (num)=>{
        if(num >10){
            alert('恭喜你！秒杀成功！！')
        }else{
            alert('很抱歉！商品的数量不足！')
        }
    }
    
    return (
        <main>
            <div className="index-hot-products-list">
                <a href="#">
                    <div className="index-product-card">
                        {/* img是显示的图片 */}
                        <img src={require("../../img/listen.jpeg")} alt="" className="margin-bottom"/>
                        <div className="desc-container">
                            {/* 这个p标签是图片下面的内容 */}
                            <p className="double-line-desc bottom-10">联想击音48小时全触控蓝牙耳机头戴式游戏听歌高音质适用苹果华为</p>
                            <p className="bottom-10">销量5000件</p>
                            <div className="price-container">
                                <p className="after-coupon-price-type2">
                                    <span>券后</span>
                                    <span className="last-span">￥194.00</span>
                                </p>
                                <span className="origin-price">原价￥444.00</span>
                            </div>
                            <div className='lastMoudle'>
                                {/* handleKill内的数字可以更改，更改过后当点击的时候就会显示的不一样 */}
                                <button className='kill' onClick={()=>handleKill(6)}>秒杀</button>
                                {/* T组件内的数字可以更改，这样显示出倒计时的时间 */}
                                <T hours={0} minutes={0} seconds={4}/>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className="index-product-card">
                        <img src={require("../../img/锅.png")} alt="" className="margin-bottom"/>
                        <div className="desc-container">
                            <p className="double-line-desc bottom-10">【主播推荐】微压料理锅家用煲汤多功能快焖锅煮鸡专用锅</p>
                            <p className="bottom-10">销量3452</p>
                            <div className="price-container">
                                <p className="after-coupon-price-type2">
                                    <span>券后</span>
                                    <span className="last-span">￥99.00</span>
                                </p>
                                <span className="origin-price">原价￥399.00</span>
                            </div>
                            <div className='lastMoudle'>
                                <button className='kill' onClick={()=>handleKill(6)}>秒杀</button>
                                <T hours={0} minutes={1} seconds={4}/>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className="index-product-card">
                        <img src={require("../../img/drink.jpeg")} alt="" className="margin-bottom"/>
                        <div className="desc-container">
                            <p className="double-line-desc bottom-10">太太静心口服液改善睡眠增加骨密度更年期5支装静心助眠口服液</p>
                            <p className="bottom-10">销量1234件</p>
                            <div className="price-container">
                                <p className="after-coupon-price-type2">
                                    <span>券后</span>
                                    <span className="last-span">￥94.00</span>
                                </p>
                                <span className="origin-price">原价￥345.00</span>
                            </div>
                            <div className='lastMoudle'>
                                <button className='kill' onClick={()=>handleKill(6)}>秒杀</button>
                                <T hours={0} minutes={1} seconds={4}/>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className="index-product-card">
                        <img src={require("../../img/beef.jpeg")} alt="" className="margin-bottom"/>
                        <div className="desc-container">
                            <p className="double-line-desc bottom-10">【大希地】整切牛排1300g\10片家庭套餐新鲜牛扒儿童牛肉赠11件套</p>
                            <p className="bottom-10">销量5000件</p>
                            <div className="price-container">
                                <p className="after-coupon-price-type2">
                                    <span>券后</span>
                                    <span className="last-span">￥154.99</span>
                                </p>
                                <span className="origin-price">原价￥349.90</span>
                            </div>
                            <div className='lastMoudle'>
                                <button className='kill' onClick={()=>handleKill(6)}>秒杀</button>
                                <T hours={0} minutes={1} seconds={4}/>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className="index-product-card">
                        <img src={require("../../img/bag.jpeg")} alt="" className="margin-bottom"/>
                        <div className="desc-container">
                            <p className="double-line-desc bottom-10">卡帝乐鳄鱼双肩包男大容量电脑旅行背包时尚潮流高中初中学生书包</p>
                            <p className="bottom-10">销量230件</p>
                            <div className="price-container">
                                <p className="after-coupon-price-type2">
                                    <span>券后</span>
                                    <span className="last-span">￥26.46</span>
                                </p>
                                <span className="origin-price">原价￥199</span>
                            </div>
                            <div className='lastMoudle'>
                                <button className='kill' onClick={()=>handleKill(6)}>秒杀</button>
                                <T hours={0} minutes={1} seconds={4}/>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            
            <div className="index-hot-products-list">
                <a href="#">
                    <div className="index-product-card">
                        <img src={require("../../img/second_1.jpeg")} alt="" className="margin-bottom"/>
                        <div className="desc-container">
                            <p className="double-line-desc bottom-10">添肴原味手抓饼家庭装鸡蛋灌饼葱油饼早餐半成品煎饼生面饼批发</p>
                            <p className="bottom-10">销量245 </p>
                            <div className="price-container">
                                <p className="after-coupon-price-type2">
                                    <span>券后</span>
                                    <span className="last-span">￥12.34</span>
                                </p>
                                <span className="origin-price">原价￥46.89</span>
                            </div>
                            <div className='lastMoudle'>
                                <button className='kill' onClick={()=>handleKill(6)}>秒杀</button>
                                <T hours={1} minutes={1} seconds={4}/>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className="index-product-card">
                        <img src={require("../../img/second_2.jpeg")} alt="" className="margin-bottom"/>
                        <div className="desc-container">
                            <p className="double-line-desc bottom-10">北大荒丰缘挂面500g*5汤面热面厨房常备麦香手工速食早餐面</p>
                            <p className="bottom-10">销量3452</p>
                            <div className="price-container">
                                <p className="after-coupon-price-type2">
                                    <span>券后</span>
                                    <span className="last-span">￥39.23</span>
                                </p>
                                <span className="origin-price">原价￥57.34</span>
                            </div>
                            <div className='lastMoudle'>
                                <button className='kill' onClick={()=>handleKill(6)}>秒杀</button>
                                <T hours={2} minutes={2} seconds={4}/>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className="index-product-card">
                        <img src={require("../../img/second_3.jpeg")} alt="" className="margin-bottom"/>
                        <div className="desc-container">
                            <p className="double-line-desc bottom-10">甄简良品空气炸锅防尘盖巾蕾丝刺绣防尘罩布艺厨房家用电器盖布罩</p>
                            <p className="bottom-10">销量341件</p>
                            <div className="price-container">
                                <p className="after-coupon-price-type2">
                                    <span>券后</span>
                                    <span className="last-span">￥13.56</span>
                                </p>
                                <span className="origin-price">原价￥23.89</span>
                            </div>
                            <div className='lastMoudle'>
                                <button className='kill' onClick={()=>handleKill(6)}>秒杀</button>
                                <T hours={0} minutes={1} seconds={4}/>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className="index-product-card">
                        <img src={require("../../img/second_4.jpeg")} alt="" className="margin-bottom"/>
                        <div className="desc-container">
                            <p className="double-line-desc bottom-10">【保税直发】SK-II中样套装4件套神仙水+大红瓶+洗面奶+清莹露</p>
                            <p className="bottom-10">销量637件</p>
                            <div className="price-container">
                                <p className="after-coupon-price-type2">
                                    <span>券后</span>
                                    <span className="last-span">￥124.99</span>
                                </p>
                                <span className="origin-price">原价￥168.99</span>
                            </div>
                            <div className='lastMoudle'>
                                <button className='kill' onClick={()=>handleKill(6)}>秒杀</button>
                                <T hours={0} minutes={1} seconds={4}/>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className="index-product-card">
                        <img src={require("../../img/second_5.jpeg")} alt="" className="margin-bottom"/>
                        <div className="desc-container">
                            <p className="double-line-desc bottom-10">德国钢材斩切刀不锈钢菜刀厨师专用切片砍骨刀酒店切菜肉饭店家用</p>
                            <p className="bottom-10">销量157件</p>
                            <div className="price-container">
                                <p className="after-coupon-price-type2">
                                    <span>券后</span>
                                    <span className="last-span">￥68.98</span>
                                </p>
                                <span className="origin-price">原价￥123.99</span>
                            </div>
                            <div className='lastMoudle'>
                                <button className='kill' onClick={()=>handleKill(6)}>秒杀</button>
                                <T hours={0} minutes={1} seconds={4}/>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
                    
            <div className="index-hot-products-list">
                <a href="#">
                    <div className="index-product-card">
                        <img src={require("../../img/third_1.jpeg")} alt="" className="margin-bottom"/>
                        <div className="desc-container">
                            <p className="double-line-desc bottom-10">誉竹纸巾抽纸批发整箱家用餐用纸巾抽纸面巾卫生巾家庭用8包/60包</p>
                            <p className="bottom-10">销量4567件</p>
                            <div className="price-container">
                                <p className="after-coupon-price-type2">
                                    <span>券后</span>
                                    <span className="last-span">￥42.35</span>
                                </p>
                                <span className="origin-price">原价￥52.99</span>
                            </div>
                            <div className='lastMoudle'>
                                <button className='kill' onClick={()=>handleKill(6)}>秒杀</button>
                                <T hours={6} minutes={5} seconds={4}/>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className="index-product-card">
                        <img src={require("../../img/锅.png")} alt="" className="margin-bottom"/>
                        <div className="desc-container">
                            <p className="double-line-desc bottom-10">花花公子冰丝透气男夏季新款休闲运动大码短袖男士七分裤两件套装</p>
                            <p className="bottom-10">已拼265件</p>
                            <div className="price-container">
                                <p className="after-coupon-price-type2">
                                    <span>券后</span>
                                    <span className="last-span">￥156.99</span>
                                </p>
                                <span className="origin-price">原价￥300.00</span>
                            </div>
                            <div className='lastMoudle'>
                                <button className='kill' onClick={()=>handleKill(6)}>秒杀</button>
                                <T hours={6} minutes={2} seconds={12}/>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className="index-product-card">
                        <img src={require("../../img/third_3.jpeg")} alt="" className="margin-bottom"/>
                        <div className="desc-container">
                            <p className="double-line-desc bottom-10">正宗五香猪头肉500g全熟食批发下酒菜开袋即食猪脸肉整箱工厂直发</p>
                            <p className="bottom-10">已拼14件</p>
                            <div className="price-container">
                                <p className="after-coupon-price-type2">
                                    <span>券后</span>
                                    <span className="last-span">￥65.99</span>
                                </p>
                                <span className="origin-price">原价￥99.59</span>
                            </div>
                            <div className='lastMoudle'>
                                <button className='kill' onClick={()=>handleKill(6)}>秒杀</button>
                                <T hours={5} minutes={1} seconds={44}/>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className="index-product-card">
                        <img src={require("../../img/third_4.jpeg")} alt="" className="margin-bottom"/>
                        <div className="desc-container">
                            <p className="double-line-desc bottom-10">【104卷巨量一年装】卫生纸卷纸批发商务用纸厕纸面巾纸卷筒纸1卷</p>
                            <p className="bottom-10">已拼150件</p>
                            <div className="price-container">
                                <p className="after-coupon-price-type2">
                                    <span>券后</span>
                                    <span className="last-span">￥14.99</span>
                                </p>
                                <span className="origin-price">原价￥29.90</span>
                            </div>
                            <div className='lastMoudle'>
                                <button className='kill' onClick={()=>handleKill(6)}>秒杀</button>
                                <T hours={10} minutes={53} seconds={54}/>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className="index-product-card">
                        <img src={require("../../img/third_5.jpeg")} alt="" className="margin-bottom"/>
                        <div className="desc-container">
                            <p className="double-line-desc bottom-10">金刚网防蚊门帘高档自粘隔断农村静音免打孔磁吸新款隔断超密透气</p>
                            <p className="bottom-10">已拼265件</p>
                            <div className="price-container">
                                <p className="after-coupon-price-type2">
                                    <span>券后</span>
                                    <span className="last-span">￥66.46</span>
                                </p>
                                <span className="origin-price">原价￥89.99</span>
                            </div>
                            <div className='lastMoudle'>
                                <button className='kill' onClick={()=>handleKill(6)}>秒杀</button>
                                <T hours={5} minutes={41} seconds={46}/>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <div className="index-hot-products-list">
                <a href="#">
                    <div className="index-product-card">
                        <img src={require("../../img/fourth_1.jpeg")} alt="" className="margin-bottom"/>
                        <div className="desc-container">
                            <p className="double-line-desc bottom-10">网红果蔬酵素果冻条正品益生菌酵素零食减脂孝素果冻增强版</p>
                            <p className="bottom-10">已拼165件</p>
                            <div className="price-container">
                                <p className="after-coupon-price-type2">
                                    <span>券后</span>
                                    <span className="last-span">￥104.00</span>
                                </p>
                                <span className="origin-price">原价￥169.99</span>
                            </div>
                            <div className='lastMoudle'>
                                <button className='kill' onClick={()=>handleKill(6)}>秒杀</button>
                                <T hours={21} minutes={40} seconds={54}/>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className="index-product-card">
                        <img src={require("../../img/fourth_2.jpeg")} alt="" className="margin-bottom"/>
                        <div className="desc-container">
                            <p className="double-line-desc bottom-10">正宗风干牛肉干手撕牦牛肉超干麻辣肉干内蒙休闲熟食零食风干牛肉</p>
                            <p className="bottom-10">已拼12件</p>
                            <div className="price-container">
                                <p className="after-coupon-price-type2">
                                    <span>券后</span>
                                    <span className="last-span">￥199.99</span>
                                </p>
                                <span className="origin-price">原价￥399.99</span>
                            </div>
                            <div className='lastMoudle'>
                                <button className='kill' onClick={()=>handleKill(6)}>秒杀</button>
                                <T hours={20} minutes={59} seconds={59}/>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className="index-product-card">
                        <img src={require("../../img/fourth_3.jpeg")} alt="" className="margin-bottom"/>
                        <div className="desc-container">
                            <p className="double-line-desc bottom-10">适用于华为蓝牙无线耳机挂耳式高音质小米苹果OPPOvivo安卓通用型</p>
                            <p className="bottom-10">已拼56件</p>
                            <div className="price-container">
                                <p className="after-coupon-price-type2">
                                    <span>券后</span>
                                    <span className="last-span">￥494.99</span>
                                </p>
                                <span className="origin-price">原价￥599.99</span>
                            </div>
                            <div className='lastMoudle'>
                                <button className='kill' onClick={()=>handleKill(6)}>秒杀</button>
                                <T hours={23} minutes={51} seconds={4}/>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className="index-product-card">
                        <img src={require("../../img/fourth_4.jpeg")} alt="" className="margin-bottom"/>
                        <div className="desc-container">
                            <p className="double-line-desc bottom-10">2022春季ins新款百搭透气减震潮男超轻老爹鞋韩版潮流防臭运动鞋</p>
                            <p className="bottom-10">销量5000件</p>
                            <div className="price-container">
                                <p className="after-coupon-price-type2">
                                    <span>券后</span>
                                    <span className="last-span">￥154.99</span>
                                </p>
                                <span className="origin-price">原价￥349.90</span>
                            </div>
                            <div className='lastMoudle'>
                                <button className='kill' onClick={()=>handleKill(6)}>秒杀</button>
                                <T hours={0} minutes={1} seconds={4}/>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className="index-product-card">
                        <img src={require("../../img/fourth_5.jpeg")} alt="" className="margin-bottom"/>
                        <div className="desc-container">
                            <p className="double-line-desc bottom-10">四季开花盆栽碗莲种子水培植物睡莲荷花种子水生水养室内绿植花卉</p>
                            <p className="bottom-10">销量230件</p>
                            <div className="price-container">
                                <p className="after-coupon-price-type2">
                                    <span>券后</span>
                                    <span className="last-span">￥26.46</span>
                                </p>
                                <span className="origin-price">原价￥199</span>
                            </div>
                            <div className='lastMoudle'>
                                <button className='kill' onClick={()=>handleKill(6)}>秒杀</button>
                                <T hours={0} minutes={1} seconds={4}/>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </main>
    )
    
}
