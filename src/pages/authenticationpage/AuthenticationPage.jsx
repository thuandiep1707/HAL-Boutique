
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { checkLogin } from "../../services/FakeAPI";

import './authenticationpage.scss'

const Login = () => {
    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
        loading: false
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoginData({...loginData, "loading": true})
        setTimeout(()=>{
            let check = checkLogin(loginData.username, loginData.password)
            alert(check)
            setLoginData({...loginData, "loading": false})
        },1000)
    }
    const handleLoginData = (type,data) => {
        if (type == "username") setLoginData({...loginData, "username" : data})
        if (type == "password") setLoginData({...loginData, "password" : data})

    } 
    if (loginData.loading){
        return(
            <div className="loading">Đang đăng nhập...</div>
        )
    }
    return(
        <div className="contain">
            <form className="login"onSubmit={(e)=>handleSubmit(e)}>
                <p className="title">Hal-Boutique</p>
                <input type="text" name="username" id="username" onChange={(e)=>handleLoginData("username",e.target.value)} required />
                <label htmlFor="username">Username</label>
                <input type="text" name="password" id="password" onChange={(e)=>handleLoginData("password",e.target.value)} required />
                <label htmlFor="password">Password</label>
                <div className="login-feature">
                    <div>
                        <input type="checkbox" name="remember" id="remember"/>
                        <label htmlFor="remember">Ghi nhớ đăng nhập</label>
                    </div>
                    <Link to="/login">quên mật khẩu</Link>
                </div>
                <button>Đăng Nhập</button>

                <div className="registerbtn">
                    <p>Bạn chưa có tài khoản?</p> <Link to="/register">Đăng kí ngay?</Link>
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