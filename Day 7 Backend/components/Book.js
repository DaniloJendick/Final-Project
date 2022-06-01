import Link from "next/link";
import styles from "../styles/book.module.css"
export default function Book(props) {
    const { name, year, state, price, author, publisher, _id } = props.book;
    //TODO 
    //ADD BOOK COVER
    return (
        <div className={styles.book}>
            <Link href={`../book/${_id}`}>
                <div className={styles.image}>
                    <img src="#" />
                </div>
            </Link>
            <div>
                <p className={styles.name} >{name}</p>
                <p className={styles.year} >{year}</p>
                <p className={styles.state} >{state}</p>
                <p className={styles.price} >{price} </p>
                <p className={styles.author} >{author} </p>
                <p className={styles.publisher} >{publisher} </p>
            </div>
        </div>
    );
}
