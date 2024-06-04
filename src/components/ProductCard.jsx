import { useNavigate } from 'react-router-dom';

import './componentStyle/ProductCard.scss'

const Productcard = ({ data })=>{  
    const nav = useNavigate()
    const handleGoToUrl = ()=>{
        nav(data.url || `/productdetail/${data?.category}/${data?.id}`)
    }
    return(
        <div className="productcard pointer" onClick={()=>handleGoToUrl()}>
            <img src={data?.img[0]} alt="hal boutique" />
            <h4 className="title">{data?.title}</h4>
            <p className="price">{data?.price.toLocaleString('it-IT', {style : "currency", currency : "VND"})}</p>
        </div>
    )
}

export default Productcard;

