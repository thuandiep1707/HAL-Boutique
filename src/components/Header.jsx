
import { menu } from '../services/FakeAPI'

import logo from '../assets/imgs/common/logo.png'
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
                <div className="nav-t1 pointer">Sản phẩm</div>
                <div className="nav-t1 pointer">Cửa hàng</div>
                <div className="nav-t1 pointer">Liên hệ</div>
                <div className="nav-t2">
                    <div className="nav-list">
                        {
                            menu.map( function (option, index) {
                                return(
                                    <div className="nav-t2_menu">
                                        <div className='nav-t2_menu_category' key={`menut1 ${index}`}>{option.category}</div>
                                        <ul className='nav-t2_menu_collection'>
                                            {collection(option.collection)}
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="nav-shop-all">
                        <img src="#" alt="shop all" />
                    </div>
                </div>
            </nav>
            <div className="feature">
                <div className="feature_search">
                    <input type="text" className='search-header' placeholder='Tìm kiếm'/>
                </div>
                <div className="feature_personal">
                    <img src="#" alt="personal" />
                    <ul className="feature_personal_sel">
                        <li className="opt">Thông tin cá nhân</li>
                        <li className="opt">Đơn mua</li>
                        <li className="opt">Đăng xuất</li>
                    </ul>
                </div>
                <div className="cart">
                    <img src="#" alt="cart" />
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