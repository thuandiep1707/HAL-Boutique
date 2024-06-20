import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { productDetail } from '../services/products.api'

import './componentStyle/ProductCard.scss'

const Productcard = ({ id })=>{  
    const nav = useNavigate()
    const [productData, setProductData] = useState()
    useEffect(()=>{
        async function getProductDetail(id){
            const res = await productDetail(id)
            if (res.status == 500){
                alert(res.message)
                return
            }
            setProductData(res.data)
        }
        if (id) getProductDetail(id)
    },[])
    const handleGoToUrl = ()=>{
        nav(`/productdetail/${productData?.category}/${productData?._id}`)
    }
    if (!productData){
        return (
            <div className="productcard">
                <div className="api-loading"></div>
            </div>
        )
    }
    return(
        <div className="productcard pointer" onClick={()=>handleGoToUrl()}>
            <img src={productData?.img} alt="hal boutique" />
            <h4 className="title">{productData?.title}</h4>
            <p className="price">{productData?.price?.toLocaleString('it-IT', {style : "currency", currency : "VND"})}</p>
        </div>
    )
}

export default Productcard;

