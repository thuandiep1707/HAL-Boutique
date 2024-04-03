
import news1 from '../../assets/imgs/home/news1.png'
import news2 from '../../assets/imgs/home/news2.png'
import news3 from '../../assets/imgs/home/news3.png'
import './homepageStyle/News.scss'

const News = ()=>{

    let newsData = [
        {
            "img" : news1,
            "title" : "BẮP TAY TO NÊN MẶC GÌ? NGUYÊN TẮC MIX AND MATCH CHE MỌI KHUYẾT ĐIỂM",
            "des" : "Bắp tay to khiến các cô nàng trông “đô con” hơn khi phần cánh tay..."
        },
        {
            "img" : news2,
            "title" : "GỢI Ý PHỐI ĐỒ ĐÔI BẠN THÂN CỰC XINH XẮN CHO GENZ",
            "des" : "Có lẽ không còn gì tuyệt vời hơn việc tìm được một người bạn thân..."
        },
        {
            "img" : news3,
            "title" : "Tips Phối Đồ Đi Chơi Hot Trend 2023",
            "des" : "Đã bao giờ bạn cảm thấy khó khăn khi không biết nên chọn trang phục..."
        }
    ]

    return (
        <section className="news">
            <h2 className="section-title">Sản phẩm mới trong tháng</h2>
            <div className="news_list">
                {
                    newsData.map((data, index)=>{
                        return <div className="news-cpn" key={index}>
                            <div className="news-cpn_img">
                                <img src={data.img} alt="hal" />
                            </div>
                            <h3 className="title">{data.title}</h3>
                            <p className="des">{data.des}</p>
                        </div>
                    })
                }
            </div>
        </section>
    )
}

export default News;