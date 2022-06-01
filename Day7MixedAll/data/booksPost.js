import { getMongoCollection } from "./signupin"
const DB_NAME = "ecobooks"
const COLLECTION_BOOKS = "books"

export  async function createBookDB(data) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_BOOKS)
    return await collection.insertOne({...data, state:"Novo"})
}

export async function findBookByName(name) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_BOOKS)
    return await collection.findOne({ name: name })
}