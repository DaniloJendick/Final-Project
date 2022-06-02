import DonateBooksForm from "../../components/DonateBooksForm";
import Link from "next/link"
import styles from "../../styles/donate.module.css"


export default function Donate() {
    return (
        <div className={styles.container}>
            <div className={styles.value}>
                <form className={styles.form}>
                    <label>
                        <input className={styles.searchbar} type="text"></input>
                        <img src="#" />
                    </label>
                </form>
                <Link href="/donate"><button className={styles.button}>Check Donations</button></Link>
                <DonateBooksForm /></div>
        </div>

    )
}