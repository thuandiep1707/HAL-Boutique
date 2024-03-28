
import { menu } from '../services/FakeAPI'

import logo from '../assets/imgs/common/logo.png'
import userIcon from '../assets/imgs/common/user-icon.png'
import cartIcon from '../assets/imgs/common/cart-icon.png'
import shopAllImg from '../assets/imgs/common/header-shop-all.png'
import './componentStyle/Header.scss'

const Header = ()=>{
    return(
        <header className="header">
            <div className="logo pointer">
                <div className="logo_img">
                    <img src={logo} alt="logo" />
                </div>
                <p className="logo_name">HAL BOUTIQUE</p>
            </div>
            <nav className="navigation">
                <div className="nav-t1 pointer">Trang chủ</div>
                <div className="nav-t1 pointer hover-handle-nav-t2">Sản phẩm</div>
                <div className="nav-t1 pointer">Cửa hàng</div>
                <div className="nav-t1 pointer">Liên hệ</div>
                <div className="nav-t2">
                    <div className="nav-list">
                        {
                            menu.map( function (option, index) {
                                return(
                                    <div className="nav-t2_menu" key={`menut1 ${index}`}>
                                        <div className='nav-t2_menu_category' >{option.category}</div>
                                        <ul className='nav-t2_menu_collection'>
                                            {collection(option.collection)}
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="nav-shop-all pointer">
                        <img src={shopAllImg} alt="shop all" />
                        <p>Xem tất cả sản phẩm</p>
                    </div>
                </div>
            </nav>
            <div className="feature">
                <div className="feature_search">
                    <input type="text" className='search-header' placeholder='Tìm kiếm'/>
                </div>
                <div className="feature_personal">
                    <img src={userIcon} alt="personal" className='feature-img pointer' />
                    <ul className="feature_personal_sel">
                        <li className="opt pointer">Thông tin cá nhân</li>
                        <li className="opt pointer">Đơn mua</li>
                        <li className="opt pointer">Đăng xuất</li>
                    </ul>
                </div>
                <div className="feature_cart">
                    <img src={cartIcon} alt="cart" className='feature-img pointer' />
                </div>
            </div>
        </header>
    )
}
function collection (arr) {
    let collectionJsx = []
    for (let i in arr) {
        collectionJsx.push(<li className='nav-t2_menu_collection_opt pointer' key={arr[i]}>{arr[i]}</li>)
    }
    return collectionJsx
}

export default Header;