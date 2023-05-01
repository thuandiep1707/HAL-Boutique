import { Link } from 'react-router-dom';
import "./MainHeader.scss"
import logoL from "../../image/logoL.jpg"

const MainHeader = () => {
    return(
        <div className="Header">
            <div className="Header__Nav">
                <img src={logoL} alt="logo" className="Header__Nav__logoL" />
                    <ul className="Header__Nav__nav">
                        <li className="opt"><Link className="link"  to="/">TRANG CHỦ</Link></li>
                        <li className="opt"><Link className="link"  to="/gioithieu">GIỚI THIỆU</Link></li>
                        <li className="opt"><Link className="link"  to="/vemaybay">VÉ MÁY BAY</Link></li>
                        <li className="opt"><Link className="link"  to="/dulichnguocngoai">DU LỊCH NƯỚC NGOÀI</Link>
                            <ul className="opt__plus">
                                <div className="col">
                                    <li className="col__opt"><Link className="link"  to="/dulichnuocngoai/trungquoc">Du lịch Trung Quốc</Link></li>    
                                    <li className="col__opt"><Link className="link"  to="/dulichnuocngoai/dailoan">Du lịch Đài Loan</Link></li>    
                                    <li className="col__opt"><Link className="link"  to="/dulichnuocngoai/nhatban">Du lịch Nhật Bản</Link></li>    
                                    <li className="col__opt"><Link className="link"  to="/dulichnuocngoai/hanquoc">Du lịch Hàn Quốc</Link></li>    
                                    <li className="col__opt"><Link className="link"  to="/dulichnuocngoai/chauau">Du lịch Châu Âu</Link></li>    
                                    <li className="col__opt"><Link className="link"  to="/dulichnuocngoai/my">Du lịch Mỹ</Link></li>    
                                </div>
                                <div className="col">
                                    <li className="col__opt"><Link className="link"  to="/dulichnuocngoai/malaysia">Du lịch Malaysia</Link></li>    
                                    <li className="col__opt"><Link className="link"  to="/dulichnuocngoai/campuchia">Du lịch Campuchia</Link></li>    
                                    <li className="col__opt"><Link className="link"  to="/dulichnuocngoai/singapore">Du lịch Singapore</Link></li>    
                                    <li className="col__opt"><Link className="link"  to="/dulichnuocngoai/thailan">Du lịch Thái Lan</Link></li>    
                                    <li className="col__opt"><Link className="link"  to="/dulichnuocngoai/dubai">Du lịch Dubai</Link></li>    
                                    <li className="col__opt"><Link className="link"  to="/dulichnuocngoai/uc">Du lịch Úc</Link></li>    
                                </div>
                            </ul>
                        </li>
                        <li className="opt"><Link className="link"  to="/dulichtrongnuoc">DU LỊCH TRONG NƯỚC</Link>
                            <ul className="opt__plus">
                                <div className="col">
                                    <li className="col__opt"><Link className="link"  to="/dulichtrongnuoc/mienbac">Miền Bắc</Link></li>
                                    <li className="col__opt"><Link className="link"  to="/dulichtrongnuoc/mientrung&namtrungbo">Miền Trung & Nam Trung Bộ</Link></li>
                                    <li className="col__opt"><Link className="link"  to="/dulichtrongnuoc/taynguyen">Tây Nguyên</Link></li>
                                </div>
                                <div className="col">
                                    <li className="col__opt"><Link className="link"  to="/dulichtrongnuoc/taynambo">Miền Tây Nam Bộ</Link></li>
                                    <li className="col__opt"><Link className="link"  to="/dulichtrongnuoc/biendao">Biển Đảo</Link></li>
                                </div>
                            </ul>
                        </li>
                        <li className="opt"><Link className="link"  to="/dichvuvisa">DỊCH VỤ VISA</Link></li>
                        <li className="opt"><Link className="link"  to="/lichkhoihanh">LỊCH KHỞI HÀNH</Link></li>
                        <li className="opt"><Link className="link"  to="/camnangdulich">CẢM NANG DU LỊCH</Link></li>
                        <li className="opt"><Link className="link"  to="/lienhe">LIÊN HỆ</Link></li>
                    </ul>
            </div>
        </div>
    )
}
export default MainHeader;