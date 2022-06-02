import { updateBookFromCart } from "../../../data/booksGet";
import { findCartByUserId } from "../../../data/cart"


export default async function (req, res){
    try{
        if(req.method === "POST"){ 
        
            const {user, arrayBooks} = req.body
            console.log('a')
            let cart = await findCartByUserId(user) 
            console.log('b')
            console.log({id: cart._id})
            let a = await updateBookFromCart(cart._id, arrayBooks);
            console.log('c')
            return res.status(200).json(a)
    
        }
    } catch(err) {
        console.log(err)
    }
}