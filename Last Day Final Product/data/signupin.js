import { MongoClient } from "mongodb" //aosidfnpiuoasdngpiuerbiuaernbgiopaerbng
//const { MongoClient} = require("mongodb");
const URL = process.env.MONGO_URL ?? "mongodb://localhost:27017"
const DB_NAME = "ecobooks"
const COLLECTION_USERS = "clients"
const COLLECTION_SESSIONS = "sessions"
import { ObjectId } from "mongodb";

let client;

export async function connectToMongo() {
    try {
        if (!client) { client = await MongoClient.connect(URL) }
        return client
    } catch (errors) {
        console.log(errors)
    }
}

export async function getMongoCollection(dbName, collectionName) {
    const client = await connectToMongo()
    console.log("chegay ao banco")
    return await client.db(dbName).collection(collectionName)
}

export async function getUserByIdDB(id) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_USERS)
    console.log("chegay ao banco")
    return await collection.findOne({ _id: ObjectId(id) })
}

//sign in/up
export async function findUserByEmail(email) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_USERS)
    return await collection.findOne({ email: email })

}

//sign up
export async function createUser(data) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_USERS)
    return await collection.insertOne({ ...data, points: 0, credits: 0 })
}

// sign in
export async function createSession(data) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_SESSIONS)
    return await collection.insertOne(data)
}

//update updateCredits

export async function updateCreditsDB(userId, creds) {
    console.log(creds)
    const collection = await getMongoCollection(DB_NAME, COLLECTION_USERS)
    if (ObjectId.isValid(userId)) {
        return await collection.updateOne(
            { _id: ObjectId(userId) }, //Procura pelo userId
            { $inc: { credits: creds } }, //Define os items
            { upsert: true } //Se não encontrar, cria
        )
    }
    return
}