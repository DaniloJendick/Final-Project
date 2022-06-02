import { useState } from "react"
import styles from "../../styles/filter.module.css"
export default function FilterMenu({ state, setState }) {
    const [buttons, setButtons] = useState([
        {
            name: "Price",
            clicked: false,
        }, {
            name: "Genre",
            clicked: false,
        }, {
            name: "State",
            clicked: false,
        }, {
            name: "Sort",
            clicked: false,
        }])
    return (
        <div className={styles.filterContainer}>
            {buttons.map((e, i) => {
                <button key={i}>{e.name}</button>
            })}
            <div className={styles.filterMenu}>

            </div>
        </div>
    )
}