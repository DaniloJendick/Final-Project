import { getMongoCollection } from "./signupin"
import { ObjectId } from "mongodb"
const DB_NAME = "ecobooks"
const COLLECTION_BOOKS = "books"
const COLLECTION_CARTS = "cart"

export async function findAllBookDB() {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_BOOKS)
    return await collection.find().toArray()
} 

export async function updateBookFromCart(cart, arrayBooks) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_CARTS)
    console.log("chegay no banco 1")
    
    let newArr = [];
    for(let i = 0; i < arrayBooks.length; i++){
        console.log("muita brabeza: "+arrayBooks[i]._id)
        newArr.push({bookId : arrayBooks[i]._id})
    }

    if(ObjectId.isValid(cart)){
        console.log("chegay no banco 2")
        return await collection.updateOne(
            { _id: ObjectId(cart) }, //Procura
            { $set: { items: newArr } }, //Define os items
            { upsert: true } //Se não encontrar, cria
        )}
        
} 

