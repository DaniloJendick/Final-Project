import Link from "next/link"
import styles from "../../styles/signIn.module.css"
import { useEffect } from "react"
import { useRouter } from "next/router"


export default function User() {

    const router = useRouter()
    useEffect(() => {
        console.log(localStorage.getItem("User"))
        if (localStorage.getItem("User")) {
            router.push("/user/profile")
            console.log(localStorage.getItem("User"))
        }

    }, [])

    return (
        <div className={styles.signInContainer}>
            <div className={styles.signInAlert}>
                <br /><p className={styles.signInText}>You have to creat an account first</p>
                {/* If there isn't a login token active */}
                <p className={styles.signInText}>have an account? YES</p>
                <Link href="/login/signin"><button className={styles.signInBottom}>Sign In</button></Link>

                <p className={styles.signUpText}>have an account ? NO</p>
                <Link href="/login/signup" ><button className={styles.signUpBottom}>Sign Up</button></Link>
                {/*TODO:
             IF SOMEONE IS LOGGED IN */}

            </div>
        </div>
    )
}