// arr.unshift(arr.pop())
// arr.push(arr.shift())

import { useState, } from 'react'
import {slideData} from '../../services/FakeAPI'
import { SliderElm1, SliderElm2 } from './slideElm'

import nextBtn from '../../assets/imgs/home/next-btn.png'
import './homepageStyle/Sliders.scss'

const Sliders = () => {
    const [slide, setSlider] = useState()
    const [data, setData] = useState(slide?.[0] || slideData[0])
    const [nextSlide, setNextSlide] = useState(true)

    clearTimeout(slideTimeout)
    var slideTimeout = setTimeout(()=>{
        handleClickNextBtn()
    },5000)
    const handleClickNextBtn = ()=>{
        let arr = slide || slideData
        // let firstElm = 
        arr.push(arr.shift())
        // clearTimeout(slideTimeout)
        setSlider(arr)
        setData(arr[0])
        setNextSlide(!nextSlide)
    }
    return(
        <section className="slider">
            <div className="slider_btn pointer" onClick={()=>handleClickNextBtn()}>
                <img src={nextBtn} alt="next" />
            </div>
            {nextSlide ? <SliderElm1 data={data} /> : <SliderElm2 data = {data} />}
        </section>
    )
}
export default Sliders;