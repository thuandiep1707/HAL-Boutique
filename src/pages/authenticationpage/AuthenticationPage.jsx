
import { useNavigate } from "react-router-dom";

import { checkLogin } from "../../services/FakeAPI";

import './authenticationpage.scss'

const Login = () => {
    let res = checkLogin("user02","user02")
    console.log(res)
    return(
        <main className="login">
            đăng nhập
        </main>
    )
}

const Register = () => {
    return(
        <main className="register">Đăng kí</main>
    )
}
export { Login, Register };