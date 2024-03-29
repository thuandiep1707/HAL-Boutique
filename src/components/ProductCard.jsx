import { useNavigate } from 'react-router-dom';

import './componentStyle/ProductCart.scss'

const Productcard = ({data})=>{  
    const nav = useNavigate()

    const handleGoToUrl = (url)=>{
        nav(url)
    }
    return(
        <div className="productcard pointer" onClick={()=>handleGoToUrl(data.url)}>
            <img src={data?.img} alt="hal boutique" />
            <h4 className="title">{data.title}</h4>
            <p className="price">{data.price.toLocaleString('it-IT', {style : "currency", currency : "VND"})}</p>
        </div>
    )
}

export default Productcard;

