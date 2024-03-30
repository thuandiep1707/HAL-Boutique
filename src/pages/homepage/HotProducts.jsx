
import Productcard from '../../components/ProductCard';
import { hotProd } from '../../services/FakeAPI'
import './HotProducts.scss'

const HotProducts = () => {

    return(
        <section className="hotproducts">
            <h2 className="section-title">Sản phẩm nổi bật</h2>
            <div className="hotproducts_list">
                {
                    hotProd.map((product, index)=>{
                        return(
                            <Productcard data={product} key={index}/>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default HotProducts;