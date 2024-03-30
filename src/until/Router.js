
import Homepage from '../pages/homepage/Homepage'
import Productpage from '../pages/productpage/Productpage'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import Shoppage from '../pages/shoppage/Shoppage'
import Checkoutpage from '../pages/checkoutpage/Checkoutpage'

const router =[
    {
        path: "/",
        element: Homepage,
    },
    {
        path: "/shop/:category",
        element: Shoppage,
    },
    {
        path: "/productdetail/:category/:id",
        element: Productpage,
    },
    {
        path: "/login",
        element: Login,
    },
    {
        path: "/register",
        element: Register,
    },
    {
        path: "/checkout",
        element: Checkoutpage,
    },
    
]

export { router, }