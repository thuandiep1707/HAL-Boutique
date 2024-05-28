
import Homepage from '../pages/homepage/Homepage'
import ProductDetailPage from '../pages/productdetailpage/ProductDetailPage'
import ProductPage from '../pages/productpage/Productpage'
import Checkoutpage from '../pages/checkoutpage/Checkoutpage'
import { LoginPage, RegisterPage } from '../pages/authenticationpage/AuthenticationPage'
import UserPage from '../pages/userpage/UserPage'

const router =[
    {
        path: "/",
        element: Homepage
    },
    {
        path: "/shop/:category",
        element: ProductPage
    },
    {
        path: "/productdetail/:category/:id",
        element: ProductDetailPage
    },
    {
        path: "/login",
        element: LoginPage
    },
    {
        path: "/register",
        element: RegisterPage
    },
    {
        path: "/checkout",
        element: Checkoutpage
    },
    {
        path: "/user",
        element: UserPage
    }
    
]

export { router, }