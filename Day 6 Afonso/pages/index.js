import { useState } from "react"
import GenreFilter from "../components/FilterMenu/GenreFilter"
import PriceFilter from "../components/FilterMenu/PriceFilter"
import StateFilter from "../components/FilterMenu/StateFilter"
import StoreBooks from "../components/storeBooks/StoreBooks"
import styles from "../styles/globalstyles.module.css"


function HomePage({ books }) {
    const [filterButton, setFilterButton] = useState(false)
    const [filter, setFilter] = useState({
        price: "",
        genre: "",
        state: ""
    })
    const [buttons, setButtons] = useState([
        {
            name: "Price",
            clicked: false,
            component: <PriceFilter setState={setFilter} state={filter} key={1} />
        }, {
            name: "Genre",
            clicked: false,
            component: <GenreFilter setState={setFilter} state={filter} key={2} />
        }, {
            name: "State",
            clicked: false,
            component: <StateFilter setState={setFilter} state={filter} key={3} />
        }, {
            name: "Sort",
            clicked: false,
        }])
    const [searchBar, setSearchBar] = useState({ text: "" })
    function search(value) {
        setSearchBar({ text: value })
        //SEND TO BACK END
    }
    return (
        <div onClick={() => setFilterButton(false)} className={styles.indexContainer}>
            <div className={styles.setter}>
                <form className={styles.form}>
                    <label>
                        <input value={searchBar.text} onChange={(e) => search(e.target.value)}></input><img src="#" />
                    </label>
                </form>
                {!filterButton &&
                    <div className={styles.filter}>
                        <button className={styles.button} onClick={(e) => { e.stopPropagation(), setFilterButton(true) }}>Filter</button>
                    </div>
                }

                {filterButton &&
                    <div className={styles.filterMenu} onClick={(e) => e.stopPropagation()}>
                        {buttons.map((e, i) => {
                            return (
                                <button className={styles.button} key={i} onClick={() => { setButtons(buttons.map(ele => (ele.name === e.name) ? { ...ele, clicked: true } : { ...ele, clicked: false })) }}>{e.name}</button>
                            )
                        })}

                        {buttons.map((e, i) => {
                            return e.clicked ? e.component : ""
                        })}
                    </div>
                }
                <StoreBooks books={books} />
            </div>
        </div>
    )
}
export default HomePage