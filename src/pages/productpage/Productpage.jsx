import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Productcard from '../../components/ProductCard'
import {categoryAPI} from '../../services/products.api'
import './productpage.scss'

const Shoppage = ()=>{
    const { category } = useParams()
    const [productList, setProductList] = useState()
    useEffect(()=>{
        scrollTo({top: 0, behavior: 'smooth'})
        async function getCategory(category){
            const res = await categoryAPI(category)
            if (res.status == 500) {
                alert(res.message)
                return
            } 
            setProductList(res.data)
        }
        setProductList()
        getCategory(category)

    },[category])
    const categoryPath = {
        "all" : "Tất cả sản phẩm",
        "dam" : "Đầm",
        "quan" : "Quần",
        "ao" : "Áo",
        "phukien" :  "Phụ kiện",
        "chanvay" : "Chân váy",
    }
    return(
        <main className="shoppage">
            <section className="shoppage_path">
                <p>{`Trang chủ / Sản phẩm / ${categoryPath[category]}`}</p>
            </section>
            <section className="shoppage_filter">
                <div className="select">
                    <p>
                        <span className='select-name'>Danh mục</span>
                        <span className='dropdown-icon'></span>
                    </p>
                    <div className="opt-list">
                        tùy chọn
                    </div>
                </div>
                <div className="select">
                    <p>
                        <span className='select-name'>Kích thước</span>
                        <span className='dropdown-icon'></span>
                    </p>
                    <div className="opt-list">
                        tùy chọn
                    </div>
                </div>
                <div className="select">
                    <p>
                        <span className='select-name'>Khoảng giá</span>
                        <span className='dropdown-icon'></span>
                    </p>
                    <div className="opt-list">
                        tùy chọn
                    </div>
                    </div>
            </section>
            {
                !productList ?
                <section className="shoppage_product-list">
                    loading...
                </section> 
                :
                <section className="shoppage_product-list">
                    {
                        productList?.map((id, index)=>{
                            return(<Productcard id={id} key={`prod${index}` } />)
                        })
                    }
                </section>
            }
        </main> 

    )
}

export default Shoppage;
