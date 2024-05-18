
import { useNavigate } from 'react-router-dom';

import coll1 from '../../assets/imgs/home/coll1.png'
import coll2 from '../../assets/imgs/home/coll2.png'
import coll3 from '../../assets/imgs/home/coll3.png'
import './homepageStyle/Collections.scss'

const Collections = ()=>{
    const nav = useNavigate()

    const handleGoToUrl = (url)=>{
        nav(url)
    }

    const listColection = [
        {
            "img" : coll1,
            "title" : "Xuân Dạ Hội",
            "des" : "Những bộ đầm tuyệt đẹp giúp bạn tỏa sáng tại những đêm dạ hội",
            "url" : "/shop/dam",
        },
        {
            "img" : coll2,
            "title" : "Khởi đầu mới",
            "des" : "Những bộ vest tuyệt đẹp sẽ giúp công việc của bạn trở nên hiệu quả hơn",
            "url" : "/shop/ao",
        },
        {
            "img" : coll3,
            "title" : "Hè Bùng Nổ",
            "des" : "Những gì chúng tôi đem lại sẽ khiến cho bạn có được một mùa hè bùng nổ",
            "url" : "/shop/ao",
        },
    ]

    return(
        <section className="collections">
            {
                listColection.map((collection, index)=>{
                    return(
                        <div className="collection pointer" key={`homeCol${index}`} onClick={()=>{handleGoToUrl(collection.url)}} >
                            <img src={collection.img} alt="hal boutique" />
                            <h4 className="title">{collection.title}</h4>
                            <p className="des">{collection.des}</p>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default Collections;

