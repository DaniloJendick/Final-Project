import Link from "next/link"
import styles from "../styles/header.module.css"
export default () => {
    return (
        <div className={styles.header}>
            <Link href="/"><div className={styles.logo}>Logo</div></Link>
            <div className={styles.burgerMenu}>Burger Menu</div>
        </div>
    )
}