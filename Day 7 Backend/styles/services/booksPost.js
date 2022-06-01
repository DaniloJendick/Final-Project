import { createBookDB, findBookByName } from "../data/booksPost"


export async function createBook(body, res){
    const already = await findBookByName(body.name)
    if(!already){
    const id = await createBookDB(body)
    return res.status(200).json({ message: "Book created!", ...id})
    }
    return res.status(400).json({ message: "Book not created!"})
    
}