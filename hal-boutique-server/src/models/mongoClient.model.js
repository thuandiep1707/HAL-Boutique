import mongobd from 'mongodb';

const client = new mongobd.MongoClient('mongodb+srv://teranova1707:Vanlong1707%40@cluster0.pix2npn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', (err) => {
    if (err) throw err
})
const db = client.db('Hal-boutique')
 
const productsCollection = db.collection('products')

const accountsCollection = db.collection('accounts')

const hotProductsCollection = db.collection('hotProducts')

export { client, accountsCollection, productsCollection, hotProductsCollection };
