
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import trashIcon from '../assets/imgs/common/trash.png'
import './componentStyle/Cart.scss'

const Cart = ({ setCartControl })=>{
    const nav = useNavigate()
    const cartData = JSON.parse(localStorage.getItem("cart"))
    const [reload, setReload] = useState(true)
    const handlRemoveItem = (index) => {
        cartData.splice(index,1)
        localStorage.setItem("cart",cartData.length > 0 ? JSON.stringify(cartData) : null)
        setReload(!reload)
    }
    return(
        <section className="cart">
            <div className="coating pointer" onClick={()=>setCartControl(false)} />
            {
                [null, []].includes(cartData)
                ? 
                <div className="cart-detail">Trống rồi</div>
                :
                <div className="cart-detail">
                    <h2 className="cart-title">Đơn hàng của bạn</h2>
                    <div className="prod-list">
                        {
                            cartData.map((data, index)=>{
                                return(
                                    <div className="card" key={index}>
                                        <div className="card-img">
                                            <img src={data.img} alt="hal boutique" />
                                        </div>
                                        <div className="infor">
                                            <div className="title">
                                                <h4>{data.title}</h4>
                                            </div>
                                            <div className="des">
                                                <p className="size">
                                                    Size: <span>{data.size}</span>
                                                </p>
                                                <p className="quantity">
                                                    Số lượng: <span>{data.quantity}</span>
                                                </p>
                                            </div>
                                            <div className="icon-recycle-bin">
                                                <img src={trashIcon} alt="hal boutique" className='pointer' onClick={()=>handlRemoveItem(index)}/>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="pay">
                        <p className="total">
                            Tổng tiền: <span>{cartData.reduce((a,e)=>a+e.count,0).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</span>
                        </p>
                        <div className="btn pointer unselect" onClick={() => {setCartControl(false); nav('/checkout')}}>Mua hàng</div>
                    </div>
                </div>
            }
        </section>
    )
}
export default Cart;