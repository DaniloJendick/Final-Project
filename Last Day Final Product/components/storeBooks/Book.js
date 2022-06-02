import Link from "next/link";
import styles from "../../styles/book.module.css"
export default function Book(props) {
    const { imageLink, name, state, price, author, _id } = props.book;

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

    //TODO 
    //ADD BOOK COVER
    return (
        <div className={styles.book}>
            {console.log(imageLink)}
            <Link href={`../book/${_id}`}>
                <div className={styles.image}>
                    <img src={`/${imageLink}`} />
                </div>
            </Link>
            <div>
                <p className={styles.name} >{name}</p>
                <p className={styles.author} >{author} </p>
                <p className={styles.state} >{state}</p>
                <div className={styles.screaming}>
                    <p className={styles.price} >{price}c </p>
                    <button onClick={submit} className={styles.button}><img className={styles.trash} src="/IconAdd.png"></img></button>
                </div>
            </div>
        </div>
    );
}
