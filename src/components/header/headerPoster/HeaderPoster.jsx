import { useState } from "react";
import "./HeaderPoster.scss"
import img1 from "./image/SlideShow1.jpg"
import img2 from "./image/SlideShow2.jpg"
import img3 from "./image/SlideShow3.jpg"
import img4 from "./image/SlideShow4.jpg"
import img5 from "./image/SlideShow5.jpg"


const HeaderPoster = () => {
    const [posterImg,setImg] = useState({
        url:[img1,img2,img3,img4,img5],
        change: [4]
    });
    const handleNext = () => {
        let handleChange = posterImg.change[0]
        let check = handleChange === 4 ? false : true
        handleChange = check ? ++handleChange : 0
        setImg({...posterImg, change:[handleChange]})
    }
    const handlePrevious = () => {
        let handleChange = posterImg.change[0]
        let check = handleChange === 0 ? false : true
        handleChange = check ? --handleChange : 4
        setImg({...posterImg, change:[handleChange]})
    }
    return(
        <div className="SlideShow">
            <img   src={posterImg.url[posterImg.change]} className="SlideShow__img" />
            <i onClick = {() => {handlePrevious()}} className="fa-solid fa-arrow-left SlideShow__previous btn"></i>
            <i onClick = {() => {handleNext()}} className="fa-solid fa-arrow-right SlideShow__next btn"></i>
        </div>
    )
}
export default HeaderPoster;