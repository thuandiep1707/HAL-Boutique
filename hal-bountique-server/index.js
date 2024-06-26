import express from "express";
import bodyParser from "body-parser";
import cors from "cors"

import authenticate from "./src/routers/authenticate.route.js";
import products from "./src/routers/products.route.js";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: "2mb" }))
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true, limit: "2mb" })); 
app.use(cors())
app.options('*', cors())

app.get('/be/', (req, res)=>{
    res.send('<h1>Home page</h1>')
})

app.use('/products/',products)
app.use('/auth/', authenticate)
app.listen(port, () => {
    console.log(`link is: http://localhost:${port}`)
})