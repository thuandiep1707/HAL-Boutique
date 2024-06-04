
import halProjectDB from "../model/database.model"

const accounts = halProjectDB.accounts

function login (username, password){
    let checkIndex = accounts.findIndex(item => item.username === username)
    if (checkIndex === -1){
        return({
            state: false,
            message: 'Tên đăng nhập không tồn tại'
        })
    }
    if (accounts[checkIndex].password !== password){
        return({
            state: false, 
            message: 'Sai mật khẩu'
        })
    }
    return({
        data: {...accounts[checkIndex], password: ''},
        state: true,
        message: 'Đăng nhập thành công'
    })
}

function register (data){
    let check = accounts.findIndex(item => item.username === data.username) !== -1
    if (check) return ({state: false, message: `Tên đăng nhập "${data.username}" đã tồn tại!`})
    halProjectDB.accounts.push({...data, id: accounts.length + 1})
    return ({state: true, message: 'đăng kí thành công'})
}

function updateUser (data){
    halProjectDB.accounts[Number(data.id) - 1] = {...data}
    return({
        state: true,
        message: 'thay đổi thông tin thành công'
    })
}

function getOrderList(username){
    let findIndex = accounts.findIndex(item => item.username === username)
    return accounts[findIndex]?.order
}

function addNewOder(data, username){
    let findIndex = accounts.findIndex(item => item.username === username)
    let newOrder = {"id": accounts[findIndex].order.length + 1, ...data}
    accounts[findIndex].order = [newOrder, ...accounts[findIndex].order]
    console.log(accounts[findIndex])
    return {message: 'thêm đơn hàng', state: true}
}

export {login, register, updateUser, getOrderList, addNewOder}
