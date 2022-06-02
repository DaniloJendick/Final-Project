import { getMongoCollection } from "./signupin";
import { ObjectId } from "mongodb";


const DB_NAME = "ecobooks"
const COLLECTION_USERS = "clients";
const COLLECTION_CARTS = "cart";



export async function findUserById(userId) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_USERS)
    if(ObjectId.isValid(userId))
    { return await collection.findOne({ _id: new ObjectId(userId) })}
    return 
}
export async function findCartByUserId(a) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_CARTS)
    if(ObjectId.isValid(a))
    {return await collection.findOne({ userId: new ObjectId(a) })}
    return 
}
export async function createCart(userId, items) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_CARTS)
    if(ObjectId.isValid(userId)){
    return await collection.updateOne(
        { userId: ObjectId(userId) }, //Procura pelo userId
        { $set: { items: items } }, //Define os items
        { upsert: true } //Se não encontrar, cria
    )}
    return
}

