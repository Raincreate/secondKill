import Header from './Header/Header'
import Main from './Main/Main'
import './Home.css'
import Subject from './subject/Subject'
import Footer from './Footer/Footer'


export default function index(){
    return(
        <div>
            {/* 头部样式 */}
            <Header/>
            {/* 全场秒杀的样式 */}
            <Subject/>
            {/* 主体图片 */}
            <Main/>
            {/* 底部样式 */}
            <Footer/>
        </div>
    )
}