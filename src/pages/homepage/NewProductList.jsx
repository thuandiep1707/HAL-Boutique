
import { newProducts } from '../../services/controller/product.controller.js'
import Productcard from '../../components/ProductCard.jsx'
import newbanner from '../../assets/imgs/home/newbanner.png'
import './homepageStyle/NewProductList.scss'

const NewProductList = ()=>{
    const newProd = newProducts()
    return(
        <section className="new-prod">
            <h2 className="section-title">Sản phẩm mới trong tháng</h2>
            {
                newProd.map((value, index)=>{
                    return(
                        <NewProdOfTyle value={value} key={`prodlist${index}`}/>
                    )
                })
            }
        </section>
    )
}

function NewProdOfTyle({value}){
    return(
        <div className="prod-of-type">
            <div className="banner">
                <img src={newbanner} alt="hal boutique" />
            </div>
            <div className="list">
                {
                    value.map((prod, index) => {return <Productcard data={prod} key={`new${index}`}/>})
                }
            </div>
        </div>
    )
}

export default NewProductList;