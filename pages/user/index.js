import Link from "next/link"
import styles from "../../styles/signIn.module.css"

export default function User() {
    return (
        <div className={styles.signInContainer}>
            <div className={styles.signInAlert}>
                {/* If there isn't a login token active */}
                <p className={styles.signInText}>have an account? YES</p>
                <Link href="/login/signin"><button className={styles.signInBottom}>Sign In</button></Link>

                <p className={styles.signUpText}>have an account ? NO</p>
                <Link href="/login/signup" ><button className={styles.signUpBottom}>Sign Up</button></Link>
                {/*TODO:
             IF SOMEONE IS LOGGED IN */}
                <Link href="/user/profile" ><button className={styles.alreadySigned}>Already Signed In</button></Link>
            </div>
        </div>
    )
}