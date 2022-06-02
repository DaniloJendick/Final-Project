import styles from "../../styles/credits.module.css"
export default function CircleCredits({ credits }) {
    return (
        <div className={styles.circle}>
            {credits}C
        </div>
    )
}