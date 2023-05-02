import { Link } from 'react-router-dom';
import './DemoService.scss';

const DemoService = ({data, loai}) => {
        let i =0;
        const star = [];
        while (i < data.khachsan){
            i++
            star.push(<i class="fa-solid fa-star star"/>)
            }
    return(
        <div className="demo_service">
            <span className="gia">
                    {data.mucgia}
                    <span className="hot">HOT</span>
            </span>
            <div className='hovera'>
                <img src={data.img} className='img'/>
                <div className="content">
                    <span className="loai">{loai}</span>
                    <h2 className="dich_vu"><Link to="/" className='link'>{data.dichvu}</Link></h2>
                    <h3 className="dia_diem">
                        <i class="fa-sharp fa-solid fa-location-dot ping"/> 
                        {data.diadiem}
                    </h3>
                    <h3 className="khoi_hanh">
                        KHỞI HÀNH: {data.khoihanh}
                    </h3>
                    <Link to="/" className="xem_them link">Xem thêm</Link>
                    <p className="thong_tin">
                        Thời gian   : <span className="data">{data.thoigian}</span>
                    </p>
                    <p className="thong_tin">
                        Khách sạn   : <span className="data">{star}</span> 
                        
                    </p>
                    <p className="thong_tin">
                        Phương tiện : <span className="data">{data.phuongtien}</span>     
                    </p>           
                </div>
                <div className="btn">ĐẶT TOUR</div>     
            </div>
        </div>
    )
}

export default DemoService;