
import { useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';

import trashIcon from '../../assets/imgs/common/trash.png'
import logoTp from '../../assets/imgs/common/logo-tp.png'
import logoMomo from '../../assets/imgs/common/logo-momo.png'
import logoVnpay from '../../assets/imgs/common/logo-vnpay.png'
import momo from '../../assets/imgs/common/momoQR.png'
import bank from '../../assets/imgs/common/bankQR.png'
import { globalContext } from '../../context/globalContext';
import { getInfor, checkoutAPI } from '../../services/Auth.api';
import './Checkoutpage.scss'

const Checkoutpage = ()=>{
    const nav = useNavigate()
    const {ctUserID} = useContext(globalContext)
    const cartData = JSON.parse(localStorage.getItem("cart"))
    const [reload, setReload] = useState(true)
    const [payMethod, setPayMethod] = useState({"method" : "offline", "service" : null})
    const [inforCheckout, setInforCheckout] = useState()
    const [ totalBill, setTotalBill] = useState(0)
    const [loading, setLoading] = useState(false)

    window.scrollTo({top : 0, behavior : "smooth"})
    useEffect(()=>{
        if (!ctUserID) nav('/login')
        if (cartData == null) nav('/')
        setTotalBill(cartData?.reduce((a, e)=>a+e.count,0))
        getUserInfor()
    },[])
    async function getUserInfor() {
        setLoading(true)
        const res = await getInfor()
        if (res.status != 201) {
            alert(res.message)
            return
        }
        setLoading(false)
        setInforCheckout(res.data)
    }

    const handlRemoveItem = (index) => {
        cartData.splice(index,1)
        localStorage.setItem("cart",cartData.length > 0 ? JSON.stringify(cartData) : null)
        setReload(!reload)
    }
    const handleSetPayMethod = (value)=>{
        setPayMethod({...payMethod, "method" : value})
    }
    const handleSetPayService = (value)=>{
        if (payMethod.method === "online") setPayMethod({...payMethod, "service" : value})
    }
    async function handleSubmit (e){
        e.preventDefault()
        if (payMethod.method === "online" && payMethod.service === null){
            alert('bạn vui lòng chọn dịch vụ chuyển khoản mà bạn muốn và tiến hành thanh toán')
            return
        }
        setLoading(true)
        const date = new Date();
        let day = date.getDate() / 10 < 1 ? '0' + date.getDate() : date.getDate();
        let month = date.getMonth() / 10 < 1 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
        let orderDay = `${day} / ${month} / ${date.getFullYear()}`
        let orderList = cartData?.map(item => ({id : item.id, size : item.size, quantity: item.quantity}))
        let data = {
            orderDay: orderDay,
            deliveryDate: null,
            orderStatus: 'pending',
            totalOder: totalBill,
            checkout: payMethod.method,
            orderList: orderList,
            address: inforCheckout?.address
        }
        const res = await checkoutAPI(data)
        if (res.status == 201) {
            localStorage.removeItem("cart")
        }
        alert(res.message)
        setLoading(false)
        nav('/')
    }
    const handleSetInforCheckout = (type,value)=>{
        setInforCheckout({...inforCheckout, [type] : value})
    }
    if (loading) return(
        <main className="checkoutpage">Loading...</main>
        
    )
    return(
        <main className="checkoutpage">
            <div className="checkoutpage_cart">
                <h2 className="cart-title">Đơn hàng của bạn</h2>
                <div className="prod-list">
                    {
                        cartData?.map((data, index)=>{
                            return(
                                <div className="card" key={index}>
                                    <div className="card-img">
                                        <img src={data?.img} alt="hal boutique" />
                                    </div>
                                    <div className="infor">
                                        <div className="title">
                                            <h4>{data?.title}</h4>
                                        </div>
                                        <div className="des">
                                            <p className="size">
                                                Size: <span>{data?.size}</span>
                                            </p>
                                            <p className="quantity">
                                                Số lượng: <span>{data?.quantity}</span>
                                            </p>
                                        </div>
                                        <div className="icon-recycle-bin">
                                            <img src={trashIcon} alt="hal boutique" className='pointer' onClick={()=>handlRemoveItem(index)}/>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="pay">
                    <p className="total">
                        Tổng tiền: <span>{totalBill.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</span>
                    </p>
                    <div className="total">
                        Tổng số lượng: <span>{cartData?.reduce((a,e)=>a+e.quantity,0)}</span>
                    </div>
                </div>
            </div>
            <div className="infor-custommer">
                <h2>THÔNG TIN GIAO HÀNG</h2>
                <form className="custommer-form" onSubmit={handleSubmit}>
                    <input required type="text" name="name" id="name" placeholder='Họ và tên' className='col12' defaultValue={inforCheckout?.name} onChange={(e) => handleSetInforCheckout('name', e.target.value)}/>
                    <input required type="email" name="email" id="email" placeholder='Email' defaultValue={inforCheckout?.email} onChange={(e) => handleSetInforCheckout('email', e.target.value)}/>
                    <input required type="tel" name="tel" id="tel" placeholder='Số điện thoại' pattern='[0-9]{10}' defaultValue={inforCheckout?.phoneNumber} onChange={(e) => handleSetInforCheckout('phoneNumber', e.target.value)}/>
                    <input required type="text" name="address" id="address" placeholder='Địa chỉ' defaultValue={inforCheckout?.address} onChange={(e) => handleSetInforCheckout('address', e.target.value)}/>
                    <div className="pay-method col12">
                        <h3>PHƯƠNG THỨC THANH TOÁN</h3>
                        <ul>
                            <li onClick={ ()=>handleSetPayMethod('offline') }>
                                <input type="radio" name="pay-method" id="offline" defaultChecked/>
                                <label htmlFor="offline">Thanh toán khi nhận hàng</label>
                            </li>
                            <li onClick={ ()=>handleSetPayMethod('online') }>
                                <input type="radio" name="pay-method" id="online" />
                                <label htmlFor="online">Thanh toán trực tuyến</label>
                            </li>
                        </ul>
                        <div className="pay-method_online pointer">
                            <img src={logoTp} alt="hal boutique" onClick={()=>{handleSetPayService('bank')}}/>
                            <img src={logoMomo} alt="hal boutique" onClick={()=>{handleSetPayService('momo')}}/>
                            <img src={logoVnpay} alt="hal boutique" onClick={()=>{handleSetPayService('bank')}}/>
                        </div>
                    </div>
                    <div className="btn-checkout col12 unselect">
                        <div className="btn pointer" onClick={()=>nav('/')}>Trở về trang chủ</div>
                        <button className="btn pointer">Xác nhận đặt hàng</button>
                    </div>
                </form>
            </div>
            {   
                ![null,'complete'].includes(payMethod.service) &&
                <div className="QRcode">
                    <div className="QRcode_coating" onClick={()=>{handleSetPayService('complete')}}></div>
                    {
                        payMethod.service === 'momo'
                        ?
                        <img src={momo} alt="hal" className="QRcode_img" />
                        :
                        <img src={bank} alt="hal" className="QRcode_img" />
                    }
                </div>
            }
        </main>
    )
}

export default Checkoutpage;
