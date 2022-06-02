import { getOneBook } from "../../../services/bookGetOne"

export default async function (req, res){
    if(req.method === "GET"){
        const _id = req.query.index
        let a = await getOneBook(_id)
        a ? res.status(200).json(a) : res.status(404).json({message:"Book not found"})
    }
}