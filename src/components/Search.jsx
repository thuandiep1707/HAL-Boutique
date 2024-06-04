
import { useNavigate } from 'react-router-dom'
import './componentStyle/Cart.scss'

const Search = ({ setSearchControl, searchData, setSearchKeyWork })=>{
    const nav = useNavigate()
    return(
        <section className="cart">
            <div className="coating pointer" onClick={()=>{setSearchKeyWork('');setSearchControl(false)}} />
            {
                <div className="cart-detail">
                    <h2 className="cart-title">Sản phẩm tương ứng</h2>
                    <div className="prod-list">
                        {
                            searchData.map((data, index)=>{
                                return(
                                    <div className="card" key={index} onClick={()=>{setSearchKeyWork('');setSearchControl(false);nav(`/productdetail/${data.category}/${data.id}`)}}>
                                        <div className="card-img">
                                            <img src={data.img} alt="hal boutique" />
                                        </div>
                                        <div className="infor">
                                            <div className="title">
                                                <h4>{data.title}</h4>
                                            </div>
                                            <div className="des">
                                                <p className="quantity">
                                                    Số lượng: <span>{data.warehouse}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }
        </section>
    )
}
export default Search;