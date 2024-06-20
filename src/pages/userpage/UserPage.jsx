
import { useState, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import OrderItem from './OrderItem'

import { globalContext } from '../../context/globalContext'
import { getInfor, updateInfor, getOrder } from '../../services/Auth.api'
import { productDetail } from '../../services/products.api'
import './userpage.scss'

const UserPage = ()=>{
    const nav = useNavigate()
    const {feature} = useParams()
    const [ board, setBoard ] = useState()
    const [ orderList, setOrderList ] = useState()    
    const [ userID, setUserID ] = useState(sessionStorage.getItem("userID"))
    const [ userData, setUserData ] = useState()
    const [ loading, setLoading ] = useState(false)
    useEffect(()=>{
        setBoard(feature)
        window.scrollTo({top: '0', behavior: 'smooth'})
        if (!userID) nav('/login')
    })
    useEffect(()=>{
        setLoading(true)
        setUserID(sessionStorage.getItem("userID"))
        if (feature == 'profile') getUserInfor()
        if (feature == 'order') getOrderList()
    },[feature])

    async function getUserInfor (){
        const response = await getInfor()
        if (response.status != 201){
            alert(response.message)
            nav('/')
            return
        }
        setLoading(false)
        setUserData(response.data)
    }

    async function getOrderList (){
        const res = await getOrder()
        if (res.status != 201){
            alert(res.message)
            return
        }
        setLoading(false)
        setOrderList(res.data.reverse())
    
    }
    const goToPath = (url)=>nav(url)

    const handleChangeUserData = (key, value) => {
        if (key == 'avatar'){
            var maxSizeInBytes = 1 * 1024 * 1024; 
            if (value.size > maxSizeInBytes) {
                alert("Vui lòng chọn hình ảnh nhỏ hơn 1MB")
                return
            }
            var reader = new FileReader();
            reader.onloadend = ()=> setUserData({...userData, avatar: reader.result})
            reader.readAsDataURL(value);
            return
        }
        setUserData({...userData, [key]: value})
    }

    async function handleSaveInfor (e){
        e.preventDefault()
        const res = await updateInfor(userData)
        alert(res.message)
    }
    return(
        <main className="userpage">
            <aside className="sidebar">
                <div className="sidebar_avt">
                    <img src={userData?.avatar} alt="avt" className="sidebar_avt_img" />
                    <div className="sidebar_avt_username">
                        <p>{userData?.username}</p>
                        <p onClick={()=>goToPath('/user/profile')} >Sửa hồ sơ</p>
                    </div>
                </div>
                <nav className="sidebar_nav">
                    <ul>
                        <li onClick={()=>goToPath('/user/profile')} >Tài khoản của tôi</li>
                        <ul className="sidebar_nav_list">
                            <li onClick={()=>goToPath('/user/profile')} >Hồ sơ</li>
                            <li>Ngân Hàng</li>
                            <li>Địa Chỉ</li>
                            <li>Đổi Mật Khẩu</li>
                            <li>Cài Đặt Thông Báo</li>
                            <li>Những  Thiết Lập Riêng Tư</li>
                        </ul>
                        <li onClick={()=>goToPath('/user/order')} >Đơn Mua</li>
                        <li>Thông báo</li>
                        <li>Kho Voucher</li>
                    </ul>
                </nav>
            </aside>
            <section className="board">
                {
                    loading && <div className="order" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Loading...</div>
                }
                {
                    board === 'profile' && 
                    !loading &&
                    <div className="profile">
                        <div className="profile_header">
                            <p>Hồ Sơ Của Tôi</p>
                            <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
                        </div>
                        <form className="profile_form" onSubmit={handleSaveInfor}>
                            <div className="label-list">
                                <label htmlFor="username">Tên đăng nhập</label>
                                <label htmlFor="name">Tên</label>
                                <label htmlFor="email">Email</label>
                                <label htmlFor="phone">Sô điện thoại</label>
                                <label htmlFor="birthday">Ngày sinh</label>
                                <label htmlFor="sex">Giới tính</label>
                            </div>
                            <div className="input-list">
                                <p>{userData?.username}</p>
                                <input type="text" name="name" id="name" defaultValue={userData?.name} onChange={(e)=>handleChangeUserData('name',e.target.value)} />
                                <input type="email" name="email" id="email" defaultValue={userData?.email}/>
                                <input type="tel" name="phone" id="phone" defaultValue={userData?.phoneNumber} required pattern="[0-9]{10}" onChange={(e)=>handleChangeUserData('phoneNumber',e.target.value)} />
                                <input type="date" name="birthday" id="birthday" defaultValue={userData?.birthday} onChange={(e)=>handleChangeUserData('birthday',e.target.value)} />
                                <div className="sex-options">
                                    <input type="radio" name="sex" id="male" checked={userData?.sex == "male" ? true : false}  onChange={()=>handleChangeUserData('sex', 'male')}/>
                                    <label htmlFor="male"> Nam </label>
                                    <input type="radio" name="sex" id="female" checked={userData?.sex == "female" ? true : false} onChange={()=>handleChangeUserData('sex', 'female')} />
                                    <label htmlFor="female"> Nữ </label>
                                    <input type="radio" name="sex" id="null" checked={userData?.sex == null ? true : false} onChange={()=>handleChangeUserData('sex', null)} />
                                    <label htmlFor="null"> Khác </label>
                                </div>
                                <button className="infor_list_btn pointer">Lưu</button>
                            </div>
                            <div className="infor_avt">
                                <div className="infor_avt_img" style={{backgroundImage: `url(${userData?.avatar})`}}></div>
                                <input type="file" name="avt" id="avt" onChange={(e)=>handleChangeUserData('avatar', e.target.files[0])} />
                                <label htmlFor="avt">Chọn Ảnh</label>
                                <p>Dung lượng file tối đa 1MB <br /> Định dạng: JPEG, PNG</p>
                            </div>
                        </form>
                    </div>
                }
                {
                    board === 'order' &&
                    !loading &&
                    <div className="order">
                        <p className="order_title">Danh sách đơn mua</p>
                        <div className="order_list">
                            {
                                orderList?.map((order, index) => {
                                    return (
                                        <div className="order_list_item" key={index}>
                                            <div className="order_list_item_header">
                                                <div>
                                                    <p>Địa chỉ: {order.address}</p>
                                                    <p>Ngày mua: {order.orderDay}</p>
                                                </div>
                                                {
                                                    order.orderStatus === "completed" &&
                                                    <p>
                                                        <span className='state'> Giao hàng thành công </span>
                                                        <span className='oder-status'> Hoàn Thành </span>
                                                    </p>
                                                }
                                                {
                                                    order.orderStatus === "pending" &&
                                                    <p>
                                                        <span className='pending'> Đang xử lý </span>
                                                    </p>
                                                }
                                                {
                                                    order.orderStatus === "cancled" &&
                                                    <p>
                                                        <span className='cancled'> Đơn hàng đã bị huỷ </span>
                                                    </p>
                                                }
                                            </div>
                                            <div className="order_list_item_list">
                                                {
                                                    order?.orderList?.map((item, index) => <OrderItem item={item} index={index} key={index}/>)
                                                }
                                            </div>
                                            <div className="order_list_item_footer">
                                                <p>
                                                    Thành tiền: { order.totalOder.toLocaleString('it-IT', {style :"currency", currency : "VND"})}
                                                </p>
                                                <div className="footer-btn">
                                                    {
                                                        order.orderStatus !== "pending" && <div className="btn bg-black" onClick={()=>handleReBuy()}>Mua lại</div>
                                                    }
                                                    {
                                                        order.orderStatus === "pending" && <div className="btn bg-black">Hủy đơn</div>
                                                    }
                                                    <div className="btn" onClick={()=> goToPath('/contacts')}>Liên hệ người bán</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                }
            </section>
        </main>
    )
}

export default UserPage;