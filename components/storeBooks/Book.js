import Link from "next/link";
import styles from "../../styles/book.module.css"
export default function Book(props) {
    const { name, state, price, author, id } = props.book;
    //TODO 
    //ADD BOOK COVER


    const submit = async () => {
        console.log("Cliquei no submit")
        console.log("User: " + localStorage.getItem('User'))
        console.log("Book: " + state._id)
        const res = await fetch(
        '/api/cart/', {
        body: JSON.stringify({ clientId: localStorage.getItem('User'), bookId: state._id, quantity: 1 }),
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST"
        })
        console.log("res: " + res)
        const json = await res

        console.log("json: " + json)

    }

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
                <button onClick={submit} className={styles.button}>Add to Cart</button>
            </div>
        </div>
    );
}
