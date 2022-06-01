import { useState } from "react"
import Link  from "next/link"
export default function SignIn() {
    const [signIn, setSignIn] = useState({
        email: "",
        password: ""
    })
    
    const submit = async () => {
        
        const res = await fetch(
            '/api/signin/', {
            body: JSON.stringify(signIn),
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        })
        const json = await res.json()
        console.log(json)
        if (res.status != 404) {
            localStorage.setItem('Seccione', json.token)
            localStorage.setItem('User', json.userId)
            console.log(localStorage)
            //const token = localStorage.getItem("tokena")
        }
        
    }

    //qweasdzxc5@gmail.com
    //Danilo123456789=
    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={(e) => {
                e.preventDefault()
                //TODO Link to home page

            }}>
                <label>Your Email
                    <input placeholder="Your Email" type="email" onChange={(e) => setSignIn({ ...signIn, email: e.target.value })}></input></label>
                <label>Password
                    <input placeholder="Your Password" type="password" onChange={(e) => setSignIn({ ...signIn, password: e.target.value })}></input></label>
                <p><Link href="#">Forgot your password?</Link></p>
                <p><Link href="/login/signup">Don't have an account?</Link></p>
                <input value="Login" type="submit" onClick={submit}></input>
            </form>
        </div>
    )
}

/*
headers: {
    "Authenticate": localStorage.getItem("token")
}
localStorage.setItem('token', json.token)
aplication.get("/list", authenticate, (req, res) => {
const user = req.user
res.status(200).json(user)
})

async function authenticate(req, res, next) {
const gotToken = req.headers.authenticate //é o token que vem do frontend
const result = await findToken(gotToken) //verifica se o token existe na sessao
if (!result) return res.status(404).send() //se nao exister, xau
const user = await findUserId(result.userId) //se existir, obtermos o utilizador 
req.user = user //e guardamos no pedido
next() // salta para o proxim0o
}
const json = await res.json()
if (res.status != 404) {
localStorage.setItem('token', json.token)
}
const res = await fetch("/list", {
method: "GET",
headers: {
    "Authenticate": localStorage.getItem("token")
}
})
async function findToken(gotToken) {
const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_SESSION)
return await collection.findOne({ 
_id: new ObjectId(gotToken)
}) 
}
const token = localStorage.getItem("token")

*/