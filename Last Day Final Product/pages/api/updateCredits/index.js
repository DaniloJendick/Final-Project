import { findUserById } from "../../../data/cart"
import { updateCredits } from "../../../services/updateCredits"

export default async function (req, res){
    if(req.method === "POST"){ 
        const {userId, credits} = req.body   
       
        
        let a =  await updateCredits(userId, Number(credits))
        let b = await findUserById(userId)
        return res.status(200).json(b)
    }
}
