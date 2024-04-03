
import { useNavigate } from 'react-router-dom'

import { newProd } from '../../services/FakeAPI.js'
import Productcard from '../../components/ProductCard.jsx'
import './homepageStyle/NewProductList.scss'

const NewProductList = ()=>{
    const nav = useNavigate()
    const handleGoToUrl = (url)=>{
        nav(url)
    }

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
                <img src={value.banner} alt="hal boutique" />
            </div>
            <div className="list">
                {
                    value.list.map((prod, index) => {return <Productcard data={prod} key={`new${index}`}/>})
                }
            </div>
        </div>
    )
}

export default NewProductList;