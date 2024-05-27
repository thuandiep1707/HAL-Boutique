
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { checkLogin } from "../../services/FakeAPI";

import './authenticationpage.scss'

const Login = () => {
    const nav = useNavigate()
    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
        remember: false,
        loading: false
    })
    // console.log(loginData)
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoginData({...loginData, "loading": true})
        setTimeout(()=>{
            let response = checkLogin(loginData.username, loginData.password)
            alert(response.message)
            if (response.state) {nav('/')}
            else{setLoginData({...loginData, "loading": false})}
        },1000)
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
            <p className="title">Hal-Boutique</p>
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

const Register = () => {
    return(
        <main className="register">Đăng kí</main>
    )
}
export { Login, Register };