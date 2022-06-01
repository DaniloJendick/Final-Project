import { findAllBookDB } from "../data/booksGet";

export async function getBooks(){
    return await findAllBookDB()
}