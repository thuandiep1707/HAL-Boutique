

import hotprod1 from '../../assets/imgs/home/hotprod1.png'
import hotprod2 from '../../assets/imgs/home/hotprod2.png'
import hotprod3 from '../../assets/imgs/home/hotprod3.png'
import hotprod4 from '../../assets/imgs/home/hotprod4.png'
import Productcard from '../../components/ProductCard';
import './HotProducts.scss'

const HotProducts = () => {

    const productList = [
        {
            "img" : hotprod1,
            "title" : "Áo Demi công sở vải thô đũi",
            "price": 1168000,
            "url" : "/productdetail/",
        },
        {
            "img" : hotprod2,
            "title" : "Áo kiểu công sở vải tuytsi dáng ôm",
            "price": 1168000,
            "url" : "/productdetail/",
        },
        {
            "img" : hotprod3,
            "title" : "Áo sơ mi vải thô lụa dáng suông cổ Đức",
            "price": 1388000,
            "url" : "/productdetail/",
        },
        {
            "img" : hotprod4,
            "title" : "Áo kiểu công sở vải lụa dáng suông",
            "price": 768000,
            "url" : "/productdetail/",
        },
    ]
    return(
        <section className="hotproducts">
            <h2 className="section-title">Sản phẩm nổi bật</h2>
            <div className="hotproducts_list">
                {
                    productList.map((product, index)=>{
                        return(
                            <Productcard data={product} key={index}/>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default HotProducts;