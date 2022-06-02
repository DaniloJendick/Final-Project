import { getMongoCollection } from "./signupin"
import { ObjectId } from "mongodb"
const DB_NAME = "ecobooks"
const COLLECTION_BOOKS = "books"

export async function findOneBookDB(id) {
    console.log(id)
    const collection = await getMongoCollection(DB_NAME, COLLECTION_BOOKS)
    if(ObjectId.isValid(id)){
        return await collection.findOne({_id:ObjectId(id)})
    }
    return false
}