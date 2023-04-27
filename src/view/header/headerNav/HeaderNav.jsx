import "./HeaderNav.scss"
import logoL from "../../../image/logoL.jpg"

const HeaderNav = () => {
    return (
        <div className="Header">
            <div className="Header__Nav">
                <img src={logoL} alt="logo" className="Header__Nav__logoL" />
                    <ul className="Header__Nav__nav">
                        <li className="opt">TRANG CHỦ</li>
                        <li className="opt">GIỚI THIỆU</li>
                        <li className="opt">VÉ MÁY BAY</li>
                        <li className="opt">DU LỊCH NƯỚC NGOÀI
                            <ul className="opt__plus">
                                <div className="col">
                                    <li className="col__opt">Du lịch Trung Quốc</li>    
                                    <li className="col__opt">Du lịch Đài Loan</li>    
                                    <li className="col__opt">Du lịch Nhật Bản</li>    
                                    <li className="col__opt">Du lịch Hàn Quốc</li>    
                                    <li className="col__opt">Du lịch Châu Âu</li>    
                                    <li className="col__opt">Du lịch Mỹ</li>    
                                </div>
                                <div className="col">
                                    <li className="col__opt">Du lịch Malaysia</li>    
                                    <li className="col__opt">Du lịch Campuchia</li>    
                                    <li className="col__opt">Du lịch Singapore</li>    
                                    <li className="col__opt">Du lịch Thái Lan</li>    
                                    <li className="col__opt">Du lịch Dubai</li>    
                                    <li className="col__opt">Du lịch Úc</li>    
                                </div>
                            </ul>
                        </li>
                        <li className="opt">DU LỊCH TRONG NƯỚC
                            <ul className="opt__plus">
                                <div className="col">
                                    <li className="col__opt">Miền Bắc</li>
                                    <li className="col__opt">Miền Trung & Nam Trung Bộ</li>
                                    <li className="col__opt">Tây Nguyên</li>
                                </div>
                                <div className="col">
                                    <li className="col__opt">Miền Tây Nam Bộ</li>
                                    <li className="col__opt">Biển Đảo</li>
                                </div>
                            </ul>
                        </li>
                        <li className="opt">DỊCH VỤ VISA</li>
                        <li className="opt">LỊCH KHỞI HÀNH</li>
                        <li className="opt">CẢM NANG DU LỊCH</li>
                        <li className="opt">LIÊN HỆ</li>
                    </ul>
            </div>
        </div>
    )
}

export default HeaderNav;