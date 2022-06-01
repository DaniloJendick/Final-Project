
import { addToCart } from "../../../services/cart"

export default async function (req, res){
    if(req.method === "POST"){ 
        const {bookId, clientId} = req.body 
        return addToCart(bookId, clientId, res)
    }
}
