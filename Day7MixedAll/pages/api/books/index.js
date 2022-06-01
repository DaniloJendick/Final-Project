import { getBooks } from "../../../services/bookGet";
import { createBook } from "../../../services/booksPost";

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
    if(req.method === "GET"){
        let a = await getBooks();
        return res.status(200).json(a)
    }
}