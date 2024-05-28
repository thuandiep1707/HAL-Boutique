
import { useState, useEffect } from 'react';

import { Slide1, Slide2 } from './Slide'
import { newsSlideList, promotionList, hotnewsList } from '../../services/FakeAPI';
import './newspageStyle/newspage.scss'

const NewsPage = ()=>{
    const [changeSlide, setChangeSlide] = useState(true)
    const [dataSlide, setDataSlide] = useState(newsSlideList)
    // clearTimeout(newsSlideTimeout)
    // clearTimeout(newsSlideTimeout)
    // setTimeout(()=>{
    //     let data = dataSlide
    //     data.push(data.shift())
    //     console.log(data)
    //     setDataSlide(data)
    // },5000)
    // useEffect(()=>{
    //     setChangeSlide(!changeSlide)
    // },[dataSlide])
    useEffect(()=>{
        window.scrollTo({top: 0, behavior: 'smooth'})
    },)
    return(
        <main className="newspage">
            <section className="newspage_slide">
                {changeSlide?<Slide1 img={dataSlide[0]}/>:<Slide2 img={dataSlide[0]}/>}
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