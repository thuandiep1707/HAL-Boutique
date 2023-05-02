
import './HomePageContent.scss';
import DemoService from './DemoService';
import NuocNgoai from './data/Nuocngoai.json';
import TrongNuoc from './data/Trongnuoc.json';


const HomePageContent = () => {
    const dataNuocNgoai = NuocNgoai;
    const dataTrongNuoc = TrongNuoc
    // console.log(demo)
    return(
        <div className="home_page_content">
            <h2 className='h3'>DU LỊCH NƯỚC NGOÀI</h2>
            {dataNuocNgoai.map(data => (<DemoService data = {data} loai = "DU LỊCH NƯỚC NGOÀI"/>))}
            <button className="btn">
                XEM TẤT CẢ DU LỊCH NƯỚC NGOÀI
            </button>
            <h2 className="h3">DU LỊCH TRONG NƯỚC</h2>
            {dataTrongNuoc.map(data => (<DemoService data = {data} loai = "DU LỊCH TRONG NƯỚC"/>))}
            <button className="btn">
                XEM TẤT CẢ DU LỊCH TRONG NƯỚC
            </button>
        </div>
    )
}
export default HomePageContent;