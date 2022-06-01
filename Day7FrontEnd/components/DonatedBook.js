import styles from "../styles/donate.module.css"
export default function DonatedBook({ book }) {
    return (
        <div className={styles.donatedBook}>
            <div className={styles.donatedImage}><img src="#" /></div>
            <div className={styles.relative}>
                <div className={styles.name}>{book.name}</div>
                <div className={styles.author}>{book.author}</div>
                <div className={styles.status}>{book.currentStatus}</div>
            </div>
        </div>
    )
}