import { useState } from "react";
import "./HeaderPoster.scss"
import img1 from "./image/SlideShow1.jpg"
import img2 from "./image/SlideShow2.jpg"
import img3 from "./image/SlideShow3.jpg"
import img4 from "./image/SlideShow4.jpg"
import img5 from "./image/SlideShow5.jpg"


const HeaderPoster = () => {
    const [posterImg,setImg] = useState({
        url:[
            {
                'img':img1,
                'title':'KHÁM PHÁ PHƯƠNG HOÀNG CỔ TRẤN - TRƯƠNG GIA',
                'titleMini' : 'Khách sạn 4 sao, vé máy bau khứ hồi bay thẳng đến Trương Gia Giới',
                'content':['Tặng vé mô phỏng VR Tour 360 độ trên không.',<br/>,'Tặng dạo thuyền sông Đà Giang ngắm cảnh đêm Phương Hoàng Cổ Trấn.',<br/>,'Tặng Vé tham quang "Cầu Kính".trải nghiệm cảm giác đi bộ trên không']
            },
            {
                'img':img2,
                'title':'ĐẮC SẮC KHÚC GIAO MÙA ĐÀI LOAN',
                'titleMini' : 'Đài Loan - Bắt trọn khúc giao mùa',
                'content':['Khám phá một Đài Loan vào mùa đẹp nhất trong năm.',<br/>,' Hành trình trọng vẹn 5 ngày 4 đêm',<br/>,'Hàng không: Vietnam Airlines, giờ bay đẹp.',<br/>,'Các điểm đến: Cao Hùng - Nam Đầu - Đài Trung - Đài Bắc',<br/>,'Giá ưu đã: chỉ từ 12.990.000VND']
            },
            {
                'img':img3,
                'title':'"THÀNH PHỐ TRONG MƠ" DUBAI - ABU DHABI',
                'titleMini' : 'DUBAI - PALM JUMEIRAH - SA MẠC SAFARI - ABU DHABI',
                'content':'Dubai là một thành phố, đồng thời là một trong bảy tiểu vương quốc của Các Tiểu Vương quốc Ả Rập Thống Nhất (UAE), nằm ở phía Nam của vịnh Ba Tư thuộc bán đảo Ả Rạp. Là một trong những điểm đến xa xỉ bậc nhất nên không mấy ngạc nhiên khi Dubai sở hữu nhiều kiến trúc độc đáo khiến bạn trầm trồ khi đặt chân đến đây'
            },
            {
                'img':img4,
                'title':'VI VU THÁI LAN: BANGKOK - PATTAYA',
                'titleMini' : 'BANGKOK - PATTAYA - ĐẢO CORAL - BUFFET 86 TẦNG',
                'content':'Được đánh giá là một điểm đến phổ biến nhất tại châu Á, Thái Lan là quốc gia được nhắc tới đầu tiên khi lên kế hoạch du lịch nước ngoài. Đến Thái Lan, đừng quên ghé thăm những khu chợ nổi tấp nập trên sông, chiêm ngưỡng lối kiến trúc độc đáo của chùa Phật Vàng, tận hưởng không khí trong lành của thành phố biển Pattaya hay thưởng thức các món ăn hấp dẫn trong tiệc buffet thịnh soạn nhé!'
            },
            {
                'img':img5,
                'title':'SINGAPORE - MALAYSIA',
                'titleMini' : 'SINGAPORE - SENTOSA - MALACCA - KUALA PUMPUR',
                'content':'Là hành trình khám phá hai quốc gia với thủ tục đơn giản, giời gian khởi hành đa dạng và chi phí hợp lý, liên tuyến Singapore - Malaysia chắc chắn sẽ là sự lựa chọn phù hợp để "lấp đầy tâm hồn"'
            }],
        change: [2]
    });

    const handleNext = () => {
        let handleChange = posterImg.change[0]
        let check = handleChange === 4 ? false : true
        handleChange = check ? ++handleChange : 0
        setImg({...posterImg, change:[handleChange]})
    }
    const handlePrevious = () => {
        let handleChange = posterImg.change[0]
        let check = handleChange === 0 ? false : true
        handleChange = check ? --handleChange : 4
        setImg({...posterImg, change:[handleChange]})
    }
    return(
        <div className="SlideShow">
            <img   src={posterImg.url[posterImg.change].img} className="SlideShow__img" />
            <i onClick = {() => {handlePrevious()}} className="fa-solid fa-arrow-left SlideShow__previous btn"></i>
            <i onClick = {() => {handleNext()}} className="fa-solid fa-arrow-right SlideShow__next btn"></i>
            <div className="SlideShow__content">
                <h2 className="title">{posterImg.url[posterImg.change].title}</h2>
                <h4 className="title_next">{posterImg.url[posterImg.change].titleMini}</h4>
                <p className="content">{posterImg.url[posterImg.change].content}</p>
                <button className="btn">XEM THÊM</button>
            </div>
        </div>
    )
}
export default HeaderPoster;