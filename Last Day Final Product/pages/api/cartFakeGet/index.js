import { findOneBookDB } from "../../../data/bookGetOne"
import { findCartByUserId } from "../../../data/cart"

export default async function (req, res){
    if(req.method === "POST"){ 
        const {user} = req.body
        console.log(user)
        //findCart By UserID
        let cart = await findCartByUserId(user) 
        //let pushBooks = cart.items.map( async e => {
            //return  await findOneBookDB(e.bookId)
        //})
        let array = [];
        for(let i = 0; i < cart?.items.length; i++){
            array.push(await findOneBookDB(cart.items[i].bookId))            
        }
        console.log(array)
        return res.status(200).json(array)
    }
}