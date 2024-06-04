
import './contactspage.scss'
import { useNavigate } from 'react-router-dom'

const ContactsPage = () => {
    const nav = useNavigate()
    window.scrollTo({top: '0', behavior: 'smooth'})
    return (
        <main className="contactspage">
            <div className="infor">
                <p>Thông tin</p>
                <ul>
                    <li>Giới thiệu về Routine</li>
                    <li>Hướng dẫn đặt hàng</li>
                    <li>Hướng dẫn kiểm tra hạng thẻ thành viên</li>
                    <li>Chính sách khách hàng thân thiết</li>
                    <li>Chính sách đổi trả</li>
                    <li>Chính sách bảo hành</li>
                    <li>Chính sách bảo mật</li>
                    <li>Câu hỏi thường gặp</li>
                    <li>Phương thức thanh toán</li>
                    <li>Thông tin liên hệ</li>
                </ul>
            </div>
            <div className="shop-link">
                <h2 className='shop-name'>Hal - Boutique</h2>
                <p className='shop-title'>
                    Hal - Boutique Cửa hàng thời trang lớn và uy tín nhất tại Sài Gòn. Chuyên cung cấp các mặt hàng về quần, áo, váy, đầm hay các phụ kiện trang sức như túi, khăn tay, dây chuyền... Đến với chúng tôi là đến với những chuyên gia, bạn sẽ được trải nghiệm mọi thứ như một nhà mua sắm chuyên nghiệp, được phục vụ tân tâm và luôn mang lại sản phẩm chất lượng nhất cho bạn.    
                </p>
                <p>
                    <b>Facebook: </b>
                    <a href="https://www.facebook.com/">https://www.facebook.com/</a>
                </p>
                <p>
                    <b>Shopee: </b>
                    <a href="https://shopee.vn/">https://shopee.vn/</a>
                </p>
                <p>
                    <b>Instagram: </b>
                    <a href="https://www.instagram.com/">https://www.instagram.com/</a>
                </p>
                <p>
                    <b>Tiktok: </b>
                    <a href="https://www.tiktok.com/">https://www.tiktok.com/</a>
                </p>
                <p>
                    <b>Youtube: </b>
                    <a href="https://www.youtube.com/">https://www.youtube.com"</a>
                </p>
                <p>
                    <b>Danh sách cửa hàng: </b>
                    <u onClick={()=> nav('/address')} className='pointer'>Hệ thống cửa hàng Hal - Boutique trên toàn quốc</u>
                </p>
            </div>
        </main>
    )
}

export default ContactsPage;
