
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import ProductCard from '../../components/ProductCard'
import { productDetail, suggestListProduct } from '../../services/products.api'
import cartIcon from '../../assets/imgs/common/cart-icon.png' 
import greenStar from '../../assets/imgs/common/green-star.png' 
import returnIcon from '../../assets/imgs/common/return-icon.png' 
import shipIcon from '../../assets/imgs/common/ship-icon.png' 
import './productdetailpage.scss'

const prodDataPage = ()=>{
    const nav = useNavigate()
    const { category, id } = useParams()
    const [data, setData] = useState(null)
    const [quantity, setQuantity] = useState(1)
    const [prodSize, setProdSize ] = useState('S')
    useEffect(()=>{
        window.scrollTo({top : 0, behavior : 'smooth'})
        setData()
        async function getData(category, id){
            let prodData = await productDetail(id)
            let prodSuggest = await suggestListProduct(category, id)
            let newData = {prodData: prodData.data, prodSuggest: prodSuggest.data}
            setData(newData)
        }
        getData(category, id)
        setQuantity(1)
        setProdSize('S')
    },[id])  
    const handleChangeQuantity = (num)=>{
        let newQuantity = num + quantity
        if(newQuantity <= 0 || newQuantity > data?.prodData.warehouse){
            alert("Số lượng không hợp lệ")
            return
        }
        setQuantity(newQuantity)
    }
    const handleAddToCart = ()=>{
        let cart = JSON.parse(localStorage.getItem("cart"))
        const findIndex = () => {
            if (cart === null) return null
            for ( let i in cart ){
                if (cart[i].title === data?.prodData.title && cart[i].size === prodSize) return i
            }
            return null
        }
        let checkIndex = findIndex()
        let countQuantity = [-1,null].includes(checkIndex) ? Number(quantity) : Number(quantity) + Number(cart[checkIndex].quantity)
        let count = countQuantity * Number(data?.prodData.price)
        let newProd = {
            "id" : data?.prodData._id,
            "img": data?.prodData.img[0],
            "title": data?.prodData.title,
            "size": prodSize,
            "quantity": countQuantity,
            "count": count
        }
        if (![-1,null].includes(checkIndex)) cart.splice(checkIndex,1)
        let newCart = cart ? [newProd,...cart] : [newProd]
        localStorage.setItem("cart", JSON.stringify(newCart))
        alert(`Thêm sản phẩm "${newProd.title}" size ${prodSize} Thành Công`)
    }
    const handleClickBuy = ()=>{
        handleAddToCart()
        nav('/checkout')
    }
    if (!data) return (
        
        <main className="productpage">
            <section className="productpage_path">
                <p>{`Trang chủ / Sản phẩm / ${data?.prodData?.title}`}</p>
            </section>
            <section className="productpage_prod-detail">
                <div className="prod-img unselect">
                    <div className="img-list">
                        <div className='img'>
                            <div className="api-loading"></div>
                        </div>
                        <div className='img'>
                            <div className="api-loading"></div>
                        </div>
                        <div className='img'>
                            <div className="api-loading"></div>
                        </div>
                    </div>
                    <div className="main-img">
                        <div className="api-loading"></div>
                    </div>
                </div>
                <div className="prod-infor"></div>
            </section>
            <section className="productpage_list">
                <h3 className="title">Sản phẩm liên quan</h3>
                <div className="list">
                    {
                        data?.prodSuggest?.map((id, index)=> <ProductCard id={id} key={index}/>)
                    }
                </div>
            </section>
        </main>
    )
    return(
        <main className="productpage">
            <section className="productpage_path">
                <p>{`Trang chủ / Sản phẩm / ${data?.prodData?.title}`}</p>
            </section>
            <section className="productpage_prod-detail">
                <div className="prod-img unselect">
                    <div className="img-list">
                        <img src={data?.prodData?.img} alt="hal boutique" className='img' />
                        <img src={data?.prodData?.img} alt="hal boutique" className='img' />
                        <img src={data?.prodData?.img} alt="hal boutique" className='img' />
                    </div>
                    <div className="main-img">
                        <img src={data?.prodData?.img} alt="hal boutique"/>
                    </div>
                </div>
                <div className="prod-infor">
                    <h3 className='title'>{data?.prodData?.title}</h3>
                    <h4 className='id'>Mã sản phẩm: {id}</h4>
                    <p className="price">{data?.prodData?.price?.toLocaleString('it-IT', {style : "currency", currency : "VND"})}</p>
                    <div className="size unselect">
                        <p>Chọn size: </p>
                        {
                            data?.prodData?.size?.map((size, index)=>{
                                return(
                                    <div key={index} style={{display: 'inline-block'}}>
                                        <input id={'size'+index} name='size' type="radio" onChange={()=> {setProdSize(size)}} defaultChecked={size == 'S'}/>
                                        <label htmlFor={'size'+index} >{size}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <p className="warehouse unselect">Số lượng trong kho: <b>{data?.prodData?.warehouse}</b></p>
                    <div className="set-quantity-cart unselect">
                        <p className="setquantity">
                            <span className='btn pointer' onClick={()=>handleChangeQuantity(-1)}> - </span>
                            <span className='num'> {quantity} </span>
                            <span className='btn pointer' onClick={()=>handleChangeQuantity(1)}> + </span>
                        </p>
                        <div className="set-btn set-cart pointer unselect" onClick={()=>handleAddToCart()} >
                            <img src={cartIcon} alt=""/>
                        </div>
                        <div className="set-btn set-buy pointer unselect" onClick={()=>handleClickBuy()}>Mua Ngay</div>
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
                        data?.prodSuggest?.map((id, index)=> <ProductCard id={id} key={index}/>)
                    }
                </div>
            </section>
            {/* <section className="productpage_list" style={{marginBottom: '50px'}}>
                <h3 className="title">Sản phẩm vừa xem</h3>
                <div className="list">
                    {
                        prodViewed?.map((id, index)=>{
                            return <ProductCard id={id} key={`prod${index}`}/>})
                    }
                </div>
            </section> */}
        </main>
    )
}

export default prodDataPage;