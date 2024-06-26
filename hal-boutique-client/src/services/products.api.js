
// const url = "http://localhost:3000/products"
const url = "https://hal-boutique-server.vercel.app/products"

async function categoryAPI(category){
    const categoryData = await fetch(`${url}/category/${category}`).then(res=>res.json())
    return categoryData
}

async function productDetail (id){
    const productDetail = await fetch(`${url}/product/${id}`).then(res=>res.json())
    return productDetail
}

async function suggestListProduct (category, id){
    const suggestListProduct = await fetch(`${url}/suggest/${category}/${id}`).then(res=>res.json())
    return suggestListProduct
}
async function hotProductsList (){
    const hotProductsList = await fetch(`${url}/hot-products`).then(res=>res.json())
    return hotProductsList
}

async function searchProducts (keyword){
    const searchProductList = await fetch(`${url}/search/${keyword}`).then(res=>res.json())
    return searchProductList
}

async function newProducts (){
    const newProductsList = await fetch(`${url}/category/new`).then(res=>res.json())
    return newProductsList
}

export { categoryAPI, productDetail, suggestListProduct, hotProductsList, searchProducts, newProducts};