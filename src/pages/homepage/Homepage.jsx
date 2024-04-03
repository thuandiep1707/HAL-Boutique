

import Slide from './Sliders'
import Collections from './Collection'
import HotProducts from './HotProducts'
import NewProductList from './NewProductList'
import News from './News'
import './homepageStyle/Homepage.scss'

const Homepage = ()=>{
    scrollTo({top: 0, behavior: 'smooth'})
    return(
        <main className="homepage">
            <h2 className='header-title title1'> - Bộ sưu tập đáng chú ý -</h2>
            <Slide />
            <Collections />
            <HotProducts />
            <NewProductList />
            <News />
        </main>
    )
}

export default Homepage;