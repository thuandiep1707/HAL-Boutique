
import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

import { globalContext } from "../../context/globalContext";
import { registerAPI, loginAPI } from "../../services/Auth.api";

import './authpage.scss'

const LoginPage = () => {
    const nav = useNavigate()
    const { getUserID } = useContext(globalContext)
    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
        remember: false,
        loading: false
    })
    async function login() {
        let response = await loginAPI({ username: loginData.username, password: loginData.password })
        alert(response.message)
        if (response.status == 201) {
            sessionStorage.setItem('userID', response.ObjectId)
            getUserID()
            nav('/')
            return
        }
        setLoginData({...loginData, "loading": false})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoginData({...loginData, "loading": true})
        login()
    }

    const handleLoginData = (type,data) => {
        if (type == "username") setLoginData({...loginData, "username": data})
        if (type == "password") setLoginData({...loginData, "password": data})
        if (type == "remember") setLoginData({...loginData, "remember": data})
    } 
    if (loginData.loading){
        return(
            <div className="contain-auth">
                <div>Đang đăng nhập...</div>
            </div>
        )
    }
    return(
        <div className="contain-auth">
            <p className="title-login">Hal-Boutique</p>
            <form className="login"onSubmit={(e)=>handleSubmit(e)}>
                <label htmlFor="username">Tên đăng nhập:</label>
                <input type="text" name="username" id="username" placeholder="thuandiepbichthuong" onChange={(e)=>handleLoginData("username",e.target.value)} required />
                <label htmlFor="password">Mật khẩu:</label>
                <input type="password" name="password" id="password" placeholder="************" onChange={(e)=>handleLoginData("password",e.target.value)} required />
                <div className="login-feature">
                    <div>
                        <input type="checkbox" name="remember" id="remember" className="pointer" onChange={(e)=>handleLoginData("remember",e.target.checked)} />
                        <label htmlFor="remember" className="pointer">Ghi nhớ đăng nhập</label>
                    </div>
                    <Link to="/login">Quên mật khẩu</Link>
                </div>
                <button className="btn-login pointer">Đăng Nhập</button>

                <div className="go-to-register">
                    <p>Bạn chưa có tài khoản?</p> <Link to="/register">Đăng kí ngay</Link>
                </div>
                <div className="login-2nd">
                    <img src="" alt="icon" />
                    <img src="" alt="icon" />
                    <img src="" alt="icon" />
                </div>
            </form>
        </div>
    )
}

const RegisterPage = () => {
    const nav = useNavigate()
    const [regData, setRegData] = useState({
        username: "",
        password: "",
        passwordAgain: "",
        email: "",
        phoneNumber: "",
        address: "",
        term: false,
        loading: false
    })
    const handlSetData = (type,data) => {
        let newData = {...regData}
        newData[type] = data
        setRegData(newData)
    }
    async function handleRegister (e){
        e.preventDefault();
        if (!regData.term) {
            alert("Vui lòng chọn đồng ý với điều khoản và chính sách")
            return
        }
        if(regData.password !== regData.passwordAgain){
            alert("mật khẩu không trùng khớp")
            return
        }
        setRegData({...regData, "loading": true})
        let requestData = {...regData}
        delete requestData.term
        delete requestData.loading
        delete requestData.passwordAgain
        const response = await registerAPI(requestData)
        alert(response.message)
        if (response.status == 201) {
            nav('/login')
            return
        }
        else{
            setRegData({
                username: "",
                password: "",
                passwordAgain: "",
                email: "",
                phoneNumber: "",
                address: "",
                term: false,
                loading: false
            })
        }
    }

    if (regData.loading){
        return(
            <div className="contain-auth">
                <div>Đang đăng kí...</div>
            </div>
        )
    }
    return(
        <div className="contain-auth">
            <p className="title-register">Hal-Boutique</p>
            <form className="register" onSubmit={handleRegister}>
                <div className="register_input">
                    <div className="left">
                        <label htmlFor="username">Tên đăng nhập:</label>
                        <input type="text" name="username" id="username" placeholder="thuandiepbichthuong" required onChange={(e) => handlSetData('username', e.target.value)} />
                        <label htmlFor="password">Mật khẩu:</label>
                        <input type="password" name="password" id="password" placeholder="************" required onChange={(e) => handlSetData('password', e.target.value)} />
                        <label htmlFor="passwordAgain">Nhập lại mật khẩu:</label>
                        <input type="password" name="passwordAgain" placeholder="************" id="passwordAgain" required onChange={(e) => handlSetData('passwordAgain', e.target.value)} />
                    </div>
                    <div className="right">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" placeholder="abc@gmail.com"required onChange={(e) => handlSetData('email', e.target.value)} />
                        <label htmlFor="phone">Số điện thoại:</label>
                        <input type="tel" name="phone" id="phone" placeholder="0123456789" required pattern="[0-9]{10}" onChange={(e) => handlSetData('phoneNumber', e.target.value)} />
                        <label htmlFor="address">Address:</label>
                        <input type="text" name="address" id="address" placeholder="số 10, phường 10, quận 10, tp. Hồ Chí Minh" required onChange={(e) => handlSetData('address', e.target.value)} />
                    </div>
                </div>
                <div className="register_term">
                    <input type="checkbox" name="term" id="term" onChange={(e)=>handlSetData('term', e.target.checked)}/>
                    <label htmlFor="term">Tôi đồng ý với <u>Điều khoản và chính sách của Hal</u></label>
                </div>
                <button className="btn-register pointer">Đăng Kí</button>
                <div className="go-to-login">
                    <p> Bạn đã có tài khoản? <Link to={'/login'} >Đăng nhập ngay</Link></p>
                </div>
            </form>
        </div>
    )
}
export { LoginPage, RegisterPage };