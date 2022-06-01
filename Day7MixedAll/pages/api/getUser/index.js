import { getUserbyId } from "../../../services/getUser"

export default async function (req, res){
    if(req.method === "POST"){ 
        const {userId} = req.body    
        let a =  await getUserbyId(userId)
        console.log(a)
        return res.status(200).json(a)
    }
}
