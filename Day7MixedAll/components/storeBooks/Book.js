import Link from "next/link";
import styles from "../../styles/book.module.css"
export default function Book(props) {
    const { name, state, price, author, id } = props.book;
    //TODO 
    //ADD BOOK COVER
    return (
        <div className={styles.book}>
            <Link href={`../book/${id}`}>
                <div className={styles.image}>
                    <img src="#" />
                </div>
            </Link>
            <div>
                <p className={styles.name} >{name}</p>
                <p className={styles.author} >{author} </p>
                <p className={styles.state} >{state}</p>

                <p className={styles.price} >{price}c </p>
            </div>
        </div>
    );
}
