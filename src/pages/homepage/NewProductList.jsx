
import Productcard from '../../components/ProductCard.jsx'
import newbanner from '../../assets/imgs/home/newbanner.png'
import { newProducts } from '../../services/products.api.js'
import './homepageStyle/NewProductList.scss'
import { useEffect, useState } from 'react'

const NewProductList = ()=>{
    const [newProd, setNewProd] = useState()
    useEffect(()=>{
        async function getNewProd(){
            const res = await newProducts()
            if (res.status == 500){
                alert(res.message)
                return
            }
            setNewProd(res.data)
        }
        getNewProd()
    },[])
    return(
        <section className="new-prod">
            <h2 className="section-title">Sản phẩm mới trong tháng</h2>
            {
                newProd?.map((value, index)=>{
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
                    value?.map((id, index) => {return <Productcard id={id} key={`new${index}`}/>})
                }
            </div>
        </div>
    )
}

export default NewProductList;