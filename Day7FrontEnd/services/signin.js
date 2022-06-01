import { createSession, findUserByEmail } from "../data/signupin"

export async function login(email, password){
	const user = await findUserByEmail(email)
        //verificar se o email existe
        if (!user) {
            //se não, 404 e { "message": "O utilizador não foi encontrado!" }
            return res.status(404).json({ message: "O utilizador não foi encontrado!" })
        }
        //se a password é igual
        if (user.password !== password) {
            return res.status(401).json({ message: "A password introduzida é inválida!" })
        }
        const token = await createSession({userId: user._id})
        return res.status(200).json({token: token.insertedId})
}