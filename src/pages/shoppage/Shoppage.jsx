import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Productcard from '../../components/ProductCard'
import { productAllCollection } from '../../services/FakeAPI'
import './Shoppage.scss'

const Shoppage = ()=>{
    const { category } = useParams()
    const [productList, setProductList] = useState(productAllCollection[category])
    useEffect(()=>{
        setProductList(productAllCollection[category])
        scrollTo({top: 0, behavior: 'smooth'})
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
                <h4>{`Trang chủ > Sản phẩm > ${categoryPath[category]}`}</h4>
            </section>
            <section className="shoppage_filter">
                <div className="select">
                    <p>Danh mục<span>{`>`}</span></p>
                    <div className="opt-list">
                        tùy chọn
                    </div>
                </div>
                <div className="select">
                    <p>Kích thước<span>{`>`}</span></p>
                    <div className="opt-list">
                        tùy chọn
                    </div>
                </div>
                <div className="select">
                    <p>Khoảng giá<span>{`>`}</span></p>
                    <div className="opt-list">
                        tùy chọn
                    </div>
                    </div>
            </section>
            <section className="shoppage_product-list">
                {
                    productList.map((prod, index)=>{
                        return(<Productcard data={prod} category={category} key={`prod${index}` } />)
                    })
                }
            </section>
        </main>
    )
}

export default Shoppage;
