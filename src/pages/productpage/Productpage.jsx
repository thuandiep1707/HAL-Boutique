
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import ProductCard from '../../components/ProductCard'
import { productAllCollection,hotProd } from '../../services/FakeAPI'
import cartIcon from '../../assets/imgs/common/cart-icon.png' 
import greenStar from '../../assets/imgs/common/green-star.png' 
import returnIcon from '../../assets/imgs/common/return-icon.png' 
import shipIcon from '../../assets/imgs/common/ship-icon.png' 
import './Productpage.scss'

const Productpage = ()=>{
    const nav = useNavigate()
    const { category, id } = useParams()
    const prodList = [...productAllCollection[category]]
    const [productDetail, setProductDetail] = useState(prodList[id-1])
    const [prodSuggest, setProdSugget] = useState([])
    const [quantity, setQuantity] = useState(1)
    const categoryPath = {
        "all" : "Tất cả sản phẩm",
        "dam" : "Đầm",
        "quan" : "Quần",
        "ao" : "Áo",
        "phukien" :  "Phụ kiện",
        "chanvay" : "Chân váy",
    }
    let prodSize
    useEffect(()=>{
        setProductDetail(prodList[id-1])
        const prodSuggest = prodList.slice(id,Number(id)+5)
        if (prodSuggest.length < 5){
            let lenght = 5 - prodSuggest.length
            for (let i = 0; i < lenght; i++){
                prodSuggest.push(prodList[i])
            }
        }
        setProdSugget(prodSuggest)
        window.scrollTo({top : 0, behavior : 'smooth'})
    },[category,id])  
    const handleChangeQuantity = (num)=>{
        let newQuantity = num + quantity
        if(newQuantity <= 0 || newQuantity > productDetail.warehouse){
            alert("Số lượng không hợp lệ")
            return
        }
        setQuantity(newQuantity)
    }

    return(
        <main className="productpage">
            <section className="productpage_path">
                <h4>{`Trang chủ > Sản phẩm > ${categoryPath[category]} > ${productDetail?.title}`}</h4>
            </section>
            <section className="productpage_prod-detail">
                <div className="prod-img unselect">
                    <div className="img-list">
                        <img src={productDetail?.img} alt="hal boutique" />
                        <img src={productDetail?.img} alt="hal boutique" />
                        <img src={productDetail?.img} alt="hal boutique" />
                    </div>
                    <div className="main-img">
                        <img src={productDetail?.img} alt="hal boutique"/>
                    </div>
                </div>
                <div className="prod-infor">
                    <h3 className='title'>{productDetail?.title}</h3>
                    <h4 className='id'>Mã sản phẩm: {category+id}</h4>
                    <p className="price">{productDetail?.price.toLocaleString('it-IT', {style : "currency", currency : "VND"})}</p>
                    <div className="size unselect">
                        <p>Chọn size: </p>
                        {
                            productDetail?.size.map((size, index)=>{
                                return(
                                    <>
                                        <input id={'size'+index} name='size' type="radio" onClick={()=> prodSize = size}/>
                                        <label htmlFor={'size'+index} >{size}</label>
                                    </>
                                )
                            })
                        }
                    </div>
                    <p className="warehouse unselect">Số lượng trong kho: <b>{productDetail?.warehouse}</b></p>
                    <div className="set-quantity-cart unselect">
                        <p className="setquantity">
                            <span className='btn pointer' onClick={()=>handleChangeQuantity(-1)}> - </span>
                            <span className='num'> {quantity} </span>
                            <span className='btn pointer' onClick={()=>handleChangeQuantity(1)}> + </span>
                        </p>
                        <div className="set-btn set-cart pointer unselect" >
                            <img src={cartIcon} alt=""/>
                        </div>
                        <div className="set-btn set-pay pointer unselect">Mua Ngay</div>
                    </div>
                    <div className="services">
                        <div className="services_child">
                            <img src={greenStar} alt="hal boutique" />
                            <p>
                                <b>Miễn phí vận chuyển</b>
                                <span>Đơn hàng từ 299k</span>
                            </p>
                        </div>
                        <div className="services_child">
                            <img src={shipIcon} alt="hal boutique" />
                            <p>
                                <b>Giao hàng nhanh</b>
                                <span>Từ 2 - 5 ngày</span>
                            </p>
                        </div>
                        <div className="services_child">
                            <img src={returnIcon} alt="hal boutique" />
                            <p>
                                <b>Đổi trả linh hoạt</b>
                                <span>Trong vòng 7 ngày</span>
                            </p>
                        </div>
                    </div>
                    <p className="policy unselect">
                        - Hàng mua Online được đổi ở tất cả các chi nhánh thuộc hệ thống Hal Boutique hoặc hỗ trợ đổi Online. <br />
                        - Bạn có thể đổi sản phẩm nếu không vừa size, đổi mẫu tùy chọn hoặc do lỗi từ nhà sản xuất (kể cả hàng sale) <br />
                        - Hàng đổi phải còn nguyên tem mác, chưa qua sử dụng hay giặt ủi và không bị hư hại do các tác nhân khác sau khi mua. <br />
                        - Khi đổi hàng bạn cần cung cấp cho nhà Hal số điện thoại và tên người mua hàng. <br />
                        - Hóa đơn đổi phải có giá trị tương đương hoặc cao hơn giá trị hàng đã mua trước đó. <br />
                         <i>* Lưu ý nhỏ là Hal sẽ không áp dụng đổi hàng với dòng sản phẩm len vì tính chất đặc trưng của sản phẩm. Tuy nhiên, Hal sẽ hỗ trợ hết mình để bạn hài lòng nhất, nên nếu có vấn đề về sản phẩm bạn cứ gửi yêu cầu với Hal nhé!</i>
                    </p>
                </div>
            </section>
            <section className="productpage_list">
                <h3 className="title">Sản phẩm liên quan</h3>
                <div className="list">
                    {
                        prodSuggest?.map((prod, index)=><ProductCard data={prod} category={category} key={`prod${index}`}/>)
                    }
                </div>
            </section>
            <section className="productpage_list">
                <h3 className="title">Sản phẩm vừa xem</h3>
                <div className="list">
                    {
                        prodSuggest?.map((prod, index)=><ProductCard data={prod} category={category} key={`prod${index}`}/>)
                    }
                </div>
            </section>
        </main>
    )
}

export default Productpage;