import { useState } from "react";
import DonatedList from "../../components/DonatedList";

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
        <div>
            <form>
                <label>
                    <input type="text"></input>
                    <img src="#" />
                </label>
            </form>
            <h1>Donations</h1>
            <DonatedList books={donatedBooks} />
        </div>

    )
}