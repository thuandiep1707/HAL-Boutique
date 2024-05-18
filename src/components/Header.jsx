import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'

import { menu } from '../services/FakeAPI'
import Cart from './Cart'
import logo from '../assets/imgs/common/logo.png'
import userIcon from '../assets/imgs/common/user-icon.png'
import cartIcon from '../assets/imgs/common/cart-icon.png'
import shopAllImg from '../assets/imgs/common/header-shop-all.png'
import './componentStyle/Header.scss'

const Header = ()=>{
    const nav = useNavigate()
    const goToPath = (url)=>nav(url)

    const [cartControl, setCartControl] = useState(false)
    const  handleCartControl = ()=>{
        setCartControl(!cartControl)
    }
    return(
        <header className="header">
            <div className="logo pointer" onClick={()=>{goToPath('/')}}>
                <div className="logo_img">
                    <img src={logo} alt="logo" />
                </div>
                <p className="logo_name">HAL BOUTIQUE</p>
            </div>
            <nav className="navigation">
                <Link to='/' className="nav-t1 pointer">Trang chủ</Link>
                <Link to='/shop/all' className="nav-t1 hover-handle-nav-t2 pointer">Sản phẩm</Link>
                <Link to='/news' className="nav-t1 pointer">Tin tức</Link>
                <Link to='/address' className="nav-t1 pointer">Cửa hàng</Link>
                <Link to='/contacts' className="nav-t1 pointer">Liên hệ</Link>
                <div className="nav-t2">
                    <div className="nav-list">
                        {
                            menu.map( function (option, index) {
                                return(
                                    <div className="nav-t2_menu" key={`menut1 ${index}`}>
                                        <div className='nav-t2_menu_category pointer' onClick={()=>{goToPath(`/shop/${option.path}`)}} >{option.category}</div>
                                        <ul className='nav-t2_menu_collection'>
                                            {collection(option.collection)}
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="nav-shop-all pointer" onClick={()=>{goToPath('/shop/all')}}>
                        <img src={shopAllImg} alt="shop all" />
                        <p>Xem tất cả sản phẩm</p>
                    </div>
                </div>
            </nav>
            <div className="feature">
                <div className="feature_search">
                    <input type="text" className='search-header' placeholder='Tìm kiếm'/>
                </div>
                <div className="feature_personal pointer" onClick={()=> goToPath('/login')}>
                    <img src={userIcon} alt="personal" className='feature-img'/>
                    <ul className="feature_personal_sel">
                        <li className="opt pointer">Thông tin cá nhân</li>
                        <li className="opt pointer">Đơn mua</li>
                        <li className="opt pointer">Đăng xuất</li>
                    </ul>
                </div>
                <div className="feature_cart">
                    <img src={cartIcon} alt="cart" className='feature-img pointer' onClick={()=>handleCartControl()}/>
                    {cartControl && <Cart setCartControl={handleCartControl}/>}
                </div>
            </div>
        </header>
    )
}
function collection (arr) {
    let collectionJsx = []
    for (let i in arr) {
        collectionJsx.push(<li className='nav-t2_menu_collection_opt' key={arr[i]}>{arr[i]}</li>)
    }
    return collectionJsx
}

export default Header;