import { useNavigate } from 'react-router-dom';

import './componentStyle/ProductCart.scss'

const Productcard = ({ data, category })=>{  
    const nav = useNavigate()
    console.log(category)
    const handleGoToUrl = ()=>{
        nav(data.url || `${category}/${data.id}`)
    }
    return(
        <div className="productcard pointer" onClick={()=>handleGoToUrl()}>
            <img src={data?.img[0]} alt="hal boutique" />
            <h4 className="title">{data.title}</h4>
            <p className="price">{data.price.toLocaleString('it-IT', {style : "currency", currency : "VND"})}</p>
        </div>
    )
}

export default Productcard;

