import { useState } from "react"
import Link from "next/link"
import styles from "../styles/signIn.module.css"

export default function SignIn() {
    const [signIn, setSignIn] = useState({
        email: "",
        password: ""
    })
    return (
        <div className={styles.signInContainer}>
            <div className={styles.signInBox}>
                <h1>Sign In</h1>
                <form onSubmit={(e) => {
                    e.preventDefault(),
                        validateSignIn(signIn)
                }}>
                    <p>Your Email</p>
                    <input className={styles.input
                    } placeholder="Your Email" onChange={(e) => setSignIn({ ...signIn, email: e.target.value })} type="email"></input>
                    <p>Password</p>
                    <input className={styles.input} placeholder="Your Password" type="password"></input>
                    <p><Link href="#">Forgot your password?</Link></p>
                    <p><Link href="/login/signup">Don't have an account?</Link></p>
                    <input className={styles.button} value="Login" type="submit"></input>
                </form>
            </div>
        </div>
    )
}

function validateSignIn(user) {
    console.log("SignIn Sucessfull")
    //TODO
    //Connect to backend to send the data to be checked
}