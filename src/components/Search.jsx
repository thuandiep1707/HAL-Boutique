
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { searchProducts } from '../services/products.api'

import './componentStyle/Cart.scss'

const Search = ({ setSearchControl, searchKeyWork, setSearchKeyWork })=>{
    const nav = useNavigate()
    const [searchData, SetSearchData] = useState()
    console.log(searchData)
    useEffect(()=>{
        SetSearchData()
        getSearchData(searchKeyWork)
    },[])

    async function getSearchData(keyword){
        const res = await searchProducts(keyword)
        SetSearchData(res.data)
    }

    // if (SetSearchData) return(
    //     div.
    // )

    return(
        <section className="cart">
            <div className="coating pointer" onClick={()=>{setSearchKeyWork('');setSearchControl(false)}} />
                <div className="cart-detail">
                    <h2 className="cart-title">Sản phẩm tương ứng</h2>
                    <div className="prod-list">
                        {
                            !searchData && <p style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Đang tải</p>
                        }
                        {
                            searchData?.length === 0 && <p style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Không tìm được sản phẩm</p>
                        }
                        {
                            searchData?.map((data, index)=>{
                                return(
                                    <div className="card" key={index} onClick={()=>{setSearchKeyWork('');setSearchControl(false);nav(`/productdetail/${data?.category}/${data?._id}`)}}>
                                        <div className="card-img">
                                            <img src={data?.img} alt="hal boutique" />
                                        </div>
                                        <div className="infor">
                                            <div className="title">
                                                <h4>{data?.title}</h4>
                                            </div>
                                            <div className="des">
                                                <p className="quantity">
                                                    Số lượng: <span>{data?.warehouse}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
        </section>
    )
}
export default Search;