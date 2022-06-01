import DonateBooksForm from "../../components/DonateBooksForm";
import Link from "next/link"
import { useState } from "react";
import DonatedList from "../../components/DonatedList";
import styles from "../../styles/donate.module.css"

export default function Donate() {
    const [donatedBooks, setDonatedBooks] = useState([{
        "publisher": "vogais",
        "author": "Robert kiyosaki",
        "name": "Pai Rico, Pai Pobre",
        "state": "Used",
        "cover": "paper back",
        "genre": "Personal finance",
        "isbn": 9789896683122,
        "price": 17.59,
        "id": 1321434,
        "currentStatus": "In Transit"
    }, {
        "publisher": "vogais",
        "author": "Robert kiyosaki",
        "name": "Pai Rico, Pai Pobre",
        "state": "Used",
        "cover": "paper back",
        "genre": "Personal finance",
        "isbn": 9789896683122,
        "price": 17.59,
        "id": 1321434,
        "currentStatus": "Reconditioning"
    }, {
        "publisher": "vogais",
        "author": "Robert kiyosaki",
        "name": "Pai Rico, Pai Pobre",
        "state": "Used",
        "cover": "paper back",
        "genre": "Personal finance",
        "isbn": 9789896683122,
        "price": 17.59,
        "id": 1321434,
        "currentStatus": "Donated"
    }, {
        "publisher": "vogais",
        "author": "Robert kiyosaki",
        "name": "Pai Rico, Pai Pobre",
        "state": "Used",
        "cover": "paper back",
        "genre": "Personal finance",
        "isbn": 9789896683122,
        "price": 17.59,
        "id": 1321434,
        "currentStatus": "Selling"
    }])
    return (
        <div  className={styles.container}>
            <div className={styles.value}>
            <form className={styles.form}>
                <label>
                    <input className={styles.searchbar} type="text"></input>
                    <img src="#" />
                </label>
            </form>
            <Link href="/donate/form"><button className={styles.button}>Donate Books</button></Link>
            <DonatedList books={donatedBooks} />
            </div> 
        </div>

    )
}