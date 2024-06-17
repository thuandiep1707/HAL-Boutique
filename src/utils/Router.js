
import Homepage from '../pages/homepage/Homepage'
import ProductPage from '../pages/productpage/Productpage'
import ProductDetailPage from '../pages/productdetailpage/ProductDetailPage'
import NewsPage from '../pages/newspage/NewsPage'
import ContactsPage from '../pages/contactspage/ContactsPage'
import StoreAddressPage from '../pages/storeaddresspage/StoreAddressPage'
import Checkoutpage from '../pages/checkoutpage/Checkoutpage'
import { LoginPage, RegisterPage } from '../pages/authpage/AuthPage'
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
        path: "/news",
        element: NewsPage
    },
    {
        path: "/address",
        element: StoreAddressPage
    },
    {
        path: "/contacts",
        element: ContactsPage
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
        path: "/user/:feature",
        element: UserPage
    }
    
]

export { router, }