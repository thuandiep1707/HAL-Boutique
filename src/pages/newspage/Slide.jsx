
import './newspageStyle/slide.scss'

const Slide1 = ({img}) => {
    return(
        <div className="slide">
            <img src={img} alt="hal-boutique" />
            <div className="short-news">
                <p className="head-line">BÀI VIẾT NỔI BẬT</p>
                <p className="title">NEW LOOKBOOK - A SUMMER ROMANCE - Holiday outfit suggestion for summer 2024</p>
                <p className="date">25/04/2024</p>
                <p className="short-content">Mở ra chương đầu tiên của chuyến hành trình mùa Hạ, những thiết kế ngọt ngào mang đậu màu sắc của thời trang resort trong bộ lookbook mới với tên gọi "A SUMMER ROMANCE" tựa như 1 bản hoà ca mùa Hạ du dương, khơi gợi lên sự an bình,...</p>
                <u>Đọc thêm...</u>
            </div>
        </div>
    )
}

const Slide2 = ({img}) => {
    return(
        <div className="slide">
            <img src={img} alt="hal-boutique" />
            <div className="short-news">
                <p className="head-line">BÀI VIẾT NỔI BẬT</p>
                <p className="title">NEW LOOKBOOK - A SUMMER ROMANCE - Holiday outfit suggestion for summer 2024</p>
                <p className="date">25/04/2024</p>
                <p className="short-content">Mở ra chương đầu tiên của chuyến hành trình mùa Hạ, những thiết kế ngọt ngào mang đậu màu sắc của thời trang resort trong bộ lookbook mới với tên gọi "A SUMMER ROMANCE" tựa như 1 bản hoà ca mùa Hạ du dương, khơi gợi lên sự an bình,...</p>
                <u>Đọc thêm...</u>
            </div>
        </div>
    )
}

export { Slide1, Slide2 };