
import { useEffect } from 'react';

import { promotionList, hotnewsList } from '../../services/controller/hardData.controller';
import slide1 from '../../assets/imgs/news/slide1.png'
import './newspageStyle/newspage.scss'

const NewsPage = ()=>{
    useEffect(()=>{
        window.scrollTo({top: 0, behavior: 'smooth'})
    })

    return(
        <main className="newspage">
            <section className="newspage_slide">
                <div className="slide">
                    <img src={slide1} alt="hal-boutique" />
                    <div className="short-news">
                        <p className="head-line">BÀI VIẾT NỔI BẬT</p>
                        <p className="title">NEW LOOKBOOK - A SUMMER ROMANCE - Holiday outfit suggestion for summer 2024</p>
                        <p className="date">25/04/2024</p>
                        <p className="short-content">Mở ra chương đầu tiên của chuyến hành trình mùa Hạ, những thiết kế ngọt ngào mang đậu màu sắc của thời trang resort trong bộ lookbook mới với tên gọi "A SUMMER ROMANCE" tựa như 1 bản hoà ca mùa Hạ du dương, khơi gợi lên sự an bình,...</p>
                        <u>Đọc thêm...</u>
                    </div>
                </div>
            </section>
            <section className="newspage_container">
                <section className="newspage_container_promotional">
                    <h2>BẢN TIN KHUYẾN MÃI</h2>
                    <div className="list-promotional">
                        {
                            promotionList.map((promotion, index)=>{
                                return(
                                    <div className="promotion pointer" key={index}>
                                        <img src={promotion.img} alt="hal"/>
                                        <p className="title">{promotion.title}</p>
                                        <p className='content'>{promotion.content}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
                <section className="newspage_container_news">
                    <div className="hot-news">
                        <h2>BÀI VIẾT NỔI BẬT</h2>
                        <div className="hot-news_list">
                            {
                                hotnewsList.map((hotnews, index)=>{
                                    return(
                                        <div className="hot-news_list_item pointer" key={index}>
                                            <img src={hotnews.img} alt="hal"/>
                                            <div className="item-content">
                                                <p className="title">{hotnews.title}</p>
                                                <p className='content'>{hotnews.content}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                </section>
            </section>
            <section className="newspage_banner"></section>
        </main>
    )
}

export default NewsPage;