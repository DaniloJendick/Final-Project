import { useState } from "react"
import Link from "next/link"
import styles from "../styles/login.module.css"

export default function AccountCreation() {
    const [createUser, setCreateUser] = useState({
        Username: "",
        Email: "",
        Password: "",
        ConfirmPassword: "",
        CaptchaComplete: true
    })
    return (
        <div className={styles.container}>
            <h1>Create Account</h1>
            <form onSubmit={(e) => {
                console.log(createUser),
                    e.preventDefault(),
                    validateCreation(createUser)

            }}>
                <p className={styles.description}>
                    Username</p>
                <input value={createUser.Username} onChange={(e) => setCreateUser({ ...createUser, Username: e.target.value })} type="text" placeholder="Your Username"></input>

                <p className={styles.description}>
                    Email</p>
                <input value={createUser.Email} onChange={(e) => setCreateUser({ ...createUser, Email: e.target.value })} type="email" placeholder="Your Email"></input>

                <p className={styles.description}>
                    Password</p>
                <input value={createUser.Password} onChange={(e) => setCreateUser({ ...createUser, Password: e.target.value })} type="password" placeholder="Password"></input>

                <p className={styles.description}>
                    Confirm Password</p>
                <input value={createUser.ConfirmPassword} onChange={(e) => setCreateUser({ ...createUser, ConfirmPassword: e.target.value })} type="password" placeholder="Confirm Password"></input>

                <h2>Captcha Here</h2>
                <input className={styles.inputSubmit} value="Register" type="submit"></input>
            </form>
            <h3>Already have an account? <Link href="/login/signin">Sign In</Link></h3>
        </div>
    )
}
function validateCreation(user) {
    return console.log(user.Password === user.ConfirmPassword)

}