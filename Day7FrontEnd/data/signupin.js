import {MongoClient} from "mongodb" //aosidfnpiuoasdngpiuerbiuaernbgiopaerbng
//const { MongoClient} = require("mongodb");
const URL = process.env.MONGO_URL ?? "mongodb://localhost:27017"
const DB_NAME = "ecobooks"
const COLLECTION_USERS = "clients"
const COLLECTION_SESSIONS = "sessions"

let client;

export  async function connectToMongo() {
    try {
        if (!client) { client = await MongoClient.connect(URL)}
        console.log(client)
        return client
    } catch (errors) {
        console.log(errors)
    }
}

export  async function getMongoCollection(dbName, collectionName) {
    const client = await connectToMongo()
    return  await client.db(dbName).collection(collectionName)
}


//sign in/up
export  async function findUserByEmail(email) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_USERS)
    return await collection.findOne({ email: email })
    
}

//sign up
export  async function createUser(data) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_USERS)
    return await collection.insertOne({...data, points:0})
}

// sign in
export  async function createSession(data) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_SESSIONS)
    return await collection.insertOne(data)
}

