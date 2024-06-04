
import {homeSlides} from '../../services/controller/hardData.controller'

import './homepageStyle/Sliders.scss'

const Sliders = () => {
    return(
        <section className="slider">
            <div className="contain">
            <div className="contain_img">
                <img src={homeSlides.img1} alt="slide" className='animation-img up'/>
                <img src={homeSlides.img2} alt="slide" className='animation-img down' />
                <img src={homeSlides.img3} alt="slide" className='animation-img up' />
            </div>
            <div className="contain_content">
                <h3 className="title">{homeSlides?.title}</h3>
                <p className='des'>{homeSlides?.des}</p>
            </div>
            </div>
        </section>
    )
}
export default Sliders;