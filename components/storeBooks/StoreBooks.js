import Book from "./Book"
import styles from "../../styles/book.module.css"
import { useState } from "react"
import { useEffect } from "react"
import styles2 from "../../styles/globalstyles.module.css"

export default function StoreBooks({ filter, setFilter, fixFilter }) {

    const [state, setState] = useState([])
    const [booksArray, setBooksArray] = useState([])
    console.log("fiter, filtrador de filtrados infiltrandos indiltradores")
    useEffect(() => {
        async function CallBack() {
            console.log('CallBooks')
            const res = await fetch(
                '/api/books/', {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "GET"
            })
            const json = await res.json()
            setState(json)

            setBooksArray(json)

            console.log(state)


        }
        CallBack()
    }, [])

    useEffect(() => {
        setState(fixFilter(state))
        console.log(state)
    }, [filter.genre, filter.price, filter.state])
    const [searchBar, setSearchBar] = useState("")
    function search(value) {
        //batota, Danilo do futuro depois corrija isso, pelamorddeus
        setSearchBar(prev => value)
        setState(booksArray.filter(e => e.name.toLowerCase().includes(searchBar.toLowerCase())
            || e.description.toLowerCase().includes(searchBar.toLowerCase())
            || e.author.toLowerCase().includes(searchBar.toLowerCase())
        ))
    }


    return (
        <div>
            <form className={styles2.form}>
                    <label>
                        <input value={searchBar.text} onChange={(e) => search(e.target.value)} placeholder="Procure pelo seu livro favorito"></input><img src="#" />
                    </label>
                </form><br />
            <div className={styles.storeMain}>
                <div className={styles.storeBooks}>
                    {state ? state.map((e, i) => {
                        return <Book id={e._id} key={e._id} book={e} />
                    }) : "erro"}
                </div>
            </div>
        </div>
    )
}



