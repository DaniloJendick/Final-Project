import { getOneBook } from "../../../services/bookGetOne"

export default async function (req, res){
    if(req.method === "POST"){
        console.log(req.body)
        const id = req.body
         let a = await getOneBook(id.id)
     
        a ? res.status(200).json(a) : res.status(300).json({message:"Book not found"})
    }
}