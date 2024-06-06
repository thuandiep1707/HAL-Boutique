
import halProjectDB from "../model/database.model"

const products = halProjectDB.products

function searchProducts (keyword){
    console.log(products.filter(product => product.title.toLowerCase().includes(keyword.toLowerCase())))
    return products.filter(product => product.title.toLowerCase().includes(keyword.toLowerCase()))
}

function hotProducts (){
    return halProjectDB.hotProd
}

function newProducts (){
    const dam = products.filter(product => product.category === 'dam')
    const phukien = products.filter(product => product.category === 'phukien')
    const ao = products.filter(product => product.category === 'ao')
    const quan = products.filter(product => product.category === 'quan')
    const chanvay = products.filter(product => product.category === 'chanvay')
    return([
        dam.splice(dam.length - 4, 3),
        phukien.splice(phukien.length - 4, 3),
        ao.splice(ao.length - 4, 3),
        quan.splice(quan.length - 4, 3),
        chanvay.splice(chanvay.length - 4, 3)
    ])
}

function getProducts (category){
    let newlist = [...products]
    if (category == 'all') return newlist.splice(0, 25)
    return newlist.filter(product => product.category === category)
}

function productDetail (id){
    return products.find(product => product.id == id)
}

function productSugggest (category, id){
    const data = products.filter(product => product.category === category)
    let num = data.findIndex(product => product.id == id) + 1
    let response = []
    while (response.length < 5){
        if (num === data.length){
            num = 0
        }
        response.push(data[num])
        num++
    }
    return response
}

function requestUpdateOderList(data){
    OderList = [{...data, id: OderList.length + 1}, ...OderList]
    return({
        state: true,
        message: data.checkout === 'offline' ?
        'Đặt hàng thành công, đơn hàng quý khách sẽ được giao trong thời gian sớm nhất, vui lòng thanh toán khi nhận hàng'
        :
        'Xác nhận thanh toán! Đơn hàng sẽ được giao trong thời gian sớm nhất'
    })
}


export { searchProducts, hotProducts, newProducts, getProducts, productDetail, productSugggest, requestUpdateOderList}