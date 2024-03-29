
import logo from '../assets/imgs/common/logo.png'
import fb from '../assets/imgs/common/fb-logo.png'
import ins from '../assets/imgs/common/ins-logo.png'
import tiktok from '../assets/imgs/common/tiktok-logo.png'
import ghn from '../assets/imgs/common/ghn-logo.png'
import ship from '../assets/imgs/common/ship-logo.png'
import pay from '../assets/imgs/common/pay-logo.png'
import bct from '../assets/imgs/common/bct-logo.png'
import './componentStyle/Footer.scss'

const Footer = ()=>{
    return(
        <footer className="footer">
            <section className="footer_top">
                <div className="footer_top_icon">
                    <img src={fb} alt="hal boutique" />
                    <img src={ins} alt="hal boutique" />
                    <img src={tiktok} alt="hal boutique" />
                </div>
                <div className="footer_top_logo">
                    <img src={logo} alt="hal boutique" />
                </div>
                <div className="footer_top_icon">
                    <img src={pay} alt="hal boutique" />
                    <img src={ghn} alt="hal boutique" />
                    <img src={ship} alt="hal boutique" />
                </div>
            </section>
            <section className="footer_mid">
                <div className="footer_mid_contacts">
                    <h5>Liên hệ</h5>
                    <p>Hotline: 0322.555.777</p>
                    <p>Địa chỉ: 284/5 Tổ 8, Ấp 3, phường Hội Nghĩa, tx. Tân Uyên, Tỉnh Bình Dương</p>
                    <p>Liên hệ: 0823.823.823</p>
                    <p>Zalo: 0799 779 777</p>
                    <p>Email: cskh@halboutique.com</p>
                </div>
                <div className="footer_mid_company">
                    <h5>Công ty</h5>
                    <p>Về chúng tôi</p>
                    <p>Tin tức</p>
                    <p>Tuyển dung</p>
                    <p>Hội viên VIP</p>
                    <p>Chuỗi cửa hàng</p>
                    <img src={bct} alt="hal boutique" />
                </div>
                <div className="footer_mid_policy">
                    <h5>Chính sách</h5>
                    <p>Chính sách thanh toán</p>
                    <p>Chính sách bảo hành, đổi trả</p>
                    <p>Chính sách giao, nhận hàng và kiểm tra</p>
                    <p>Chính sách bảo mật thông tin</p>
                    <p>Chính sách mua hàng</p>
                </div>
            </section>
            <section className="footer_bot">
                <p>Bản quyền thuộc về Công Ty TNHH Thời Trang HAL</p>
            </section>
        </footer>
    )
}

export default Footer;