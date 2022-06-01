import Image from "next/image";
import styles from "../../styles/cart.module.css"
// 192.168.57.146:3000
export default function CartBook({ book, removeFunc }) {
    return (
        <div className={styles.book}>
            <div className={
                styles.bookImage
            }><img src={book.image} /></div>
            <div className={styles.bookInformation}>
                <p className={styles.title}>{book.title}</p>
                <p className={styles.author}>{book.author}</p>
            </div>
            <p className={styles.price}>{book.price}c</p>
            <button className={
                styles.bookButton
            } onClick={() => removeFunc(book._id)}></button>
        </div>
    )
}