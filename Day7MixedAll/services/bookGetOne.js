import { findOneBookDB } from "../data/bookGetOne";

export async function getOneBook(id){
    return await findOneBookDB(id)
}