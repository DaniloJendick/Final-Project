import { useState } from "react"
import Link from "next/link"

export default function AccountCreation() {
    const [createUser, setCreateUser] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        captchaComplete: true
    })
    //123qwe!QWE
    const submit = async () => {
        console.log(createUser)
        const res = await fetch(
            '/api/signup/', {
            body: JSON.stringify(createUser),
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        })
        const json = await res.json()
        if (res.status != 400) {
            localStorage.setItem('token', json.token)
            console.log(localStorage)
            //const token = localStorage.getItem("token")
        }




    }


    return (
        <div>
            <h1>Create Account</h1>
            <form onSubmit={(e) => {
                console.log(createUser),
                    e.preventDefault(),
                    validateCreation(createUser)

            }}>
                <label>
                    Username
                    <input value={createUser.Username} onChange={(e) => setCreateUser({ ...createUser, Username: e.target.value })} type="text" placeholder="Your Username"></input>
                </label>
                <label>
                    Email
                    <input value={createUser.Email} onChange={(e) => setCreateUser({ ...createUser, Email: e.target.value })} type="email" placeholder="Your Email"></input>
                </label>
                <label>
                    Password
                    <input value={createUser.Password} onChange={(e) => setCreateUser({ ...createUser, Password: e.target.value })} type="password" placeholder="Password"></input>
                </label>
                <label>
                    Confirm Password
                    <input value={createUser.ConfirmPassword} onChange={(e) => setCreateUser({ ...createUser, ConfirmPassword: e.target.value })} type="password" placeholder="Confirm Password"></input>
                </label>
                <h2>Captcha Here</h2>
                <input value="Register" onClick={submit} type="submit"></input>
            </form>
            <h3>Already have an account? <Link href="/login/signin">Sign In</Link></h3>
        </div>
    )
}
//123QWE!"#"qwe
function validateCreation(user) {
    return console.log(user.Password === user.ConfirmPassword)

}