
import { createUser } from "../../../data/signupin"
import { login } from "../../../services/signin"
import { testEmail, testPassword, testPasswordConfirmation } from "../../../services/signup"
export default async function (req, res) {
    if (req.method === "POST") {
        console.log(req.body)
        const { passwordConfirmation, ...signupData } = req.body
        const { name, password, address, age, sex, email } = signupData
        console.log("a")
        const errors = {
            ...await testEmail(email),
            ...testPassword(password),
            ...testPasswordConfirmation(password, passwordConfirmation),
        }
        //separar resposta de sucesso e resposta de erro
        console.log(errors)
        if (Object.keys(errors).length > 0) {
            return res.status(400).json({ message: "Os dados introduzidos não são válidos.", errors })
        }
        console.log("c")
        await createUser(signupData)
        console.log("d")
        let a = await login(email, password, res)
        console.log(a)
        console.log("e")
        return a
    }
}
//qweasdzxc@gmail.com
//Danilo123456789=