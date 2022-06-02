import { useState } from "react"
import Link from "next/link"
import styles from "../styles/login.module.css"
import { useRouter } from "next/router"

export default function AccountCreation() {
    const [createUser, setCreateUser] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        captchaComplete: true
    })
    const router = useRouter()
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
        console.log(json, res.status)
        if (res.status != 400) {
            localStorage.setItem('token', json.token)
            localStorage.setItem('User', json.userId)
            console.log(localStorage)
            router.push("/")
            // window.location.reload()

            //const token = localStorage.getItem("token")
        }




    }


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
                <input value={createUser.name} onChange={(e) => setCreateUser({ ...createUser, name: e.target.value })} type="text" placeholder="Your name"></input>

                <p className={styles.description}>
                    Email</p>
                <input value={createUser.email} onChange={(e) => setCreateUser({ ...createUser, email: e.target.value })} type="email" placeholder="Your Email"></input>

                <p className={styles.description}>
                    Password</p>
                <input value={createUser.password} onChange={(e) => setCreateUser({ ...createUser, password: e.target.value })} type="password" placeholder="Password"></input>

                <p className={styles.description}>
                    Confirm Password</p>
                <input value={createUser.passwordConfirmation} onChange={(e) => setCreateUser({ ...createUser, passwordConfirmation: e.target.value })} type="password" placeholder="Confirm Password"></input>
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


//     return (
//         <div className={styles.container}>
//             <h1>Create Account</h1>
//             <form onSubmit={(e) => {
//                 console.log(createUser),
//                     e.preventDefault(),
//                     validateCreation(createUser)

//             }}>
//                 <p className={styles.description}>
//                     Username</p>
//                 <input value={createUser.name} onChange={(e) => setCreateUser({ ...createUser, name: e.target.value })} type="text" placeholder="Your Username"></input>

//                 <p className={styles.description}>
//                     Email</p>
//                 <input value={createUser.email} onChange={(e) => setCreateUser({ ...createUser, email: e.target.value })} type="email" placeholder="Your Email"></input>

//                 <p className={styles.description}>
//                     Password</p>
//                 <input value={createUser.password} onChange={(e) => setCreateUser({ ...createUser, password: e.target.value })} type="password" placeholder="Password"></input>

//                 <p className={styles.description}>
//                     Confirm Password</p>
//                 <input value={createUser.passwordConfirmation} onChange={(e) => setCreateUser({ ...createUser, passwordConfirmation: e.target.value })} type="password" placeholder="Confirm Password"></input>

//                 <h2>Captcha Here</h2>
//                 <input className={styles.inputSubmit} onClick={submit} value="Register" type="submit"></input>
//             </form>
//             <h3>Already have an account? <Link href="/login/signin">Sign In</Link></h3>
//         </div>
//     )
// }
// //123QWE!"#"qwe
// function validateCreation(user) {
//     return console.log(user.Password === user.passwordConfirmation)

// }