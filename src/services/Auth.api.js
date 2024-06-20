
const url = "http://localhost:3000/auth"
// const url = "https://hal-boutique-be.vercel.app/auth"

async function registerAPI (data) {
    const res = await fetch(`${url}/register`, {
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .catch(err => console.log(err))
    return res
}

async function loginAPI (data){
    const res = await fetch(`${url}/login`, {
        method: "PUT",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .catch(err => console.log(err))
    return res
}

async function getInfor (){
    const ObjectId = sessionStorage.getItem("userID")
    const res = await fetch(`${url}/user/${ObjectId}`)
    .then(res => res.json())
    .catch(err=> console.log(err))
    return res
}

async function updateInfor (data){
    const res = await fetch(`${url}/update`,{
        method: "PUT",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .catch(err=> console.log(err))
    return res
}

async function checkoutAPI (data){
    const id = sessionStorage.getItem("userID")
    const res = await fetch(`${url}/checkout/`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "user-id": id
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .catch(err=> console.log(err))
    return res
}

export { registerAPI, loginAPI, getInfor, updateInfor, checkoutAPI };