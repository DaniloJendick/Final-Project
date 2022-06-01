import { createBook } from "../../../services/booksPost"

export default async function (req, res){
    if(req.method === "POST"){ 
        const {author, 
            publisher, 
            name, 
            year, 
            dimensions, 
            description, 
            state, 
            cover, 
            language,
            genre,
            isbn,
            price
        } = req.body 
        return createBook(req.body, res)
        
    }
}