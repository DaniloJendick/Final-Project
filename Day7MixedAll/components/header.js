import Link from "next/link"
import styles from "../styles/header.module.css"
export default () => {
    return (
        <div className={styles.header}>
            <Link href="/"><div className={styles.logo}><img src="/logoFinal3.png" /></div></Link>
        </div>
    )
}