import StateComponent from "./FilterComponents/StateComponent"
import styles from "../../styles/filtermenu.module.css"

export default function StateFilter({ handleChange }) {
    const states = ["New", "Used", "Very Used", "Refurbished"]
    return (
        <div className={styles.stateMenu} onClick={(e) => e.stopPropagation()} >
            {states.map((e, i) => {
                return <StateComponent key={i} handleChange={handleChange} ele={e} />
            })}
        </div>
    )
}