
// const url = "http://localhost:3000/products"
const url = "https://hal-boutique-be.vercel.app/products"

async function registerAPI (data) {
    const res = await fetch(`${url}/register`, {
        method: "POST",
        headers:{},
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .catch(err => console.log(err))
    return res
}

export { registerAPI };