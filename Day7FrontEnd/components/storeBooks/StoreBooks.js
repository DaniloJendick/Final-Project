import Book from "./Book"
import styles from "../../styles/book.module.css"
export default function StoreBooks({ books }) {
    return (
        <div className={styles.storeMain}>
            <div className={styles.storeBooks}>
                {books.map((e, i) => {
                    return <Book key={`${e.id} ${i}`} book={e} />
                })}
            </div>
        </div>
    )
}