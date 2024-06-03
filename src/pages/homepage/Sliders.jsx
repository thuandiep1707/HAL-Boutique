
import { useState, } from 'react'
import {slideData} from '../../services/FakeAPI'

import nextBtn from '../../assets/imgs/home/next-btn.png'
import './homepageStyle/Sliders.scss'

const Sliders = () => {
    const [slide, setSlider] = useState()
    const [data, setData] = useState(slide?.[0] || slideData[0])
    const [nextSlide, setNextSlide] = useState(true)

    const handleClickNextBtn = ()=>{
        let arr = slide || slideData
        arr.push(arr.shift())
        setSlider(arr)
        setData(arr[0])
        setNextSlide(!nextSlide)
    }
    return(
        <section className="slider">
            <div className="slider_btn pointer" onClick={()=>handleClickNextBtn()}>
                <img src={nextBtn} alt="next" />
            </div>
            <div className="contain">
            <div className="contain_img">
                <img src={data.img1} alt="slide" className='animation-img up'/>
                <img src={data.img2} alt="slide" className='animation-img down' />
                <img src={data.img3} alt="slide" className='animation-img up' />
            </div>
            <div className="contain_content">
                <h3 className="title">{data?.title}</h3>
                <p className='des'>{data?.des}</p>
            </div>
            </div>
        </section>
    )
}
export default Sliders;