import { useNavigate } from 'react-router-dom'

import { useState, useEffect } from 'react'
import { productDetail } from '../../services/products.api'


function OrderItem ({item, index}){
    const nav =  useNavigate()
    const goToPath = (path)=>{nav(path)}
    const [data,  setData] = useState()
    async  function getData(){
        const res = await productDetail(item.id)
        setData(res.data)
    }
    useEffect(()=>{
        getData()
    }, [])
    return(
        <div className='item' key={index} onClick={()=>goToPath(`/productdetail/${item.category}/${item.id}`)}>
            <img src={data?.img} className='pointer' alt="item" onClick={()=> goToPath(`/productdetail/${item.category}/${item.id}`)}/>
            <p className="infor">
                <span>{data?.title}</span>
                <span>Size: {item?.size}</span>
                <span>Số lượng: x{item?.quantity}</span>
                <span className='free'>Trả hàng miễn phí 15 ngày</span>
            </p>
            <p className='price'>{data?.price?.toLocaleString('it-IT', {style :"currency", currency : "VND"})}</p>
        </div>
    )
}

export default OrderItem;