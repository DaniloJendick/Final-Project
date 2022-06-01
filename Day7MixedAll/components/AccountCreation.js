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

                <p className={styles.description}>
                    Username</p>
                <input value={createUser.username} onChange={(e) => setCreateUser({ ...createUser, Username: e.target.value })} type="text" placeholder="Your Username"></input>

                <p className={styles.description}>
                    Email</p>
                <input value={createUser.email} onChange={(e) => setCreateUser({ ...createUser, Email: e.target.value })} type="email" placeholder="Your Email"></input>

                <p className={styles.description}>
                    Password</p>
                <input value={createUser.password} onChange={(e) => setCreateUser({ ...createUser, Password: e.target.value })} type="password" placeholder="Password"></input>

                <p className={styles.description}>
                    Confirm Password</p>
                <input value={createUser.passwordConfirmation} onChange={(e) => setCreateUser({ ...createUser, ConfirmPassword: e.target.value })} type="password" placeholder="Confirm Password"></input>
                <h2>Captcha Here</h2>
                <input className={styles.inputSubmit} value="Register" onClick={submit} type="submit"></input>
            </form>
            <h3>Already have an account? <Link href="/login/signin">Sign In</Link></h3>
        </div>
    )
}
//123QWE!"#"qwe
function validateCreation(user) {
    return console.log(user.Password === user.ConfirmPassword)

}