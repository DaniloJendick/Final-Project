
import {createUser } from "../../../data/signupin"
import { testEmail, testPassword, testPasswordConfirmation } from "../../../services/signup"
export default async function (req, res){
    if(req.method === "POST"){ 
        const { passwordConfirmation, ...signupData}  = req.body
        const {name, password, address, age, sex, email} = signupData

        const errors = {
            ...await testEmail(email),
            ...testPassword(password),
            ...testPasswordConfirmation(password, passwordConfirmation),
        }
        //separar resposta de sucesso e resposta de erro
        if (Object.keys(errors).length > 0) {
            return res.status(400).json({ message: "Os dados introduzidos não são válidos.", errors })
        }
        const id = await createUser(signupData)
        res.status(200).json({ message: "Utilizador Criado com Sucesso!", _id: id.insertedId })

    }
}