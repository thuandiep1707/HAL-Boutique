
const url = "http://localhost:3000/auth"
// const url = "https://hal-boutique-be.vercel.app/auth"

async function registerAPI (data) {
    console.log(JSON.stringify(data))
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

export { registerAPI, loginAPI };