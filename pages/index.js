// import StoreBooks from "../components/storeBooks/StoreBooks"
// import {useState} from "react"


// function HomePage({ books }) {
    
//     return (
//         <div>
//             <h1>HOME PAGE</h1>
            
//             <StoreBooks />
//         </div>
//     )
// }

// export default HomePage

import { useState } from "react"
import GenreFilter from "../components/FilterMenu/GenreFilter"
import PriceFilter from "../components/FilterMenu/PriceFilter"
import StateFilter from "../components/FilterMenu/StateFilter"
import StoreBooks, { fixFilter } from "../components/storeBooks/StoreBooks"
import styles from "../styles/globalstyles.module.css"


function HomePage({ books }) {
    const [filterButton, setFilterButton] = useState(false)
    const [filter, setFilter] = useState({
        price: [],
        genre: "",
        state: ""
    })
//10.12.21.101
    function fixFilter(status){
        console.log(status)
        console.log(filter)
        if(filter.genre !== "") ( status = status.filter(e => e.genre.toLowerCase().includes(filter.genre.toLowerCase())) ) 
        if(filter.state !== "") ( status = status.filter(e => e.state.toLowerCase().includes(filter.state.toLowerCase())) ) 
        console.log(status)
        return status
    }


    function handleStateChange(property, value) {
        setFilter(f => ({ ...f, [property]: value }))
    }
    const [buttons, setButtons] = useState([
        {
            name: "Price",
            clicked: false,
            component: <PriceFilter handleChange={handleStateChange} state={filter} key={1} />
        }, {
            name: "Genre",
            clicked: false,
            component: <GenreFilter handleChange={handleStateChange} state={filter} key={2} />
        }, {
            name: "State",
            clicked: false,
            component: <StateFilter handleChange={handleStateChange} state={filter} key={3} />
        }, {
            name: "Sort",
            clicked: false,
        }])
    const [searchBar, setSearchBar] = useState({ text: "" })
    
    return (
        <div onClick={() => setFilterButton(false)} className={styles.indexContainer}>
            <div className={styles.setter}>
                {/* <form className={styles.form}>
                    <label>
                        <input value={searchBar.text} onChange={(e) => search(e.target.value)}></input><img src="#" />
                    </label>
                </form> */}
                {!filterButton &&
                    <div className={styles.filter}>
                        <button className={styles.button} onClick={(e) => { e.stopPropagation(), setFilterButton(true) }}>Filter</button>
                    </div>
                }

                {filterButton &&
                    <div className={styles.filterMenu} onClick={(e) => e.stopPropagation()}>
                        {buttons.map((e, i) => {
                            return (
                                <button className={e.clicked ? styles.clicked : styles.button} key={i} onClick={() => { setButtons(buttons.map(ele => (ele.name === e.name) ? { ...ele, clicked: true } : { ...ele, clicked: false })) }}>{e.name}</button>
                            )
                        })}

                        {buttons.map((e, i) => {
                            return e.clicked ? e.component : ""
                        })}
                        <button onClick={() => console.log(filter)}>AA</button>
                    </div>
                }
                <StoreBooks books={books} filter={filter} setFilter={setFilter} fixFilter={fixFilter}/>
            </div>
        </div>
    )
}
export default HomePage