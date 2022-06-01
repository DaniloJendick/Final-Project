import PriceComponent from "./FilterComponents/PriceComponent"
import styles from "../../styles/filtermenu.module.css"

export default function PriceFilter({ handleChange }) {
    const prices = ["5-10", "10-15", "15-20", "20-30", "30+"]
    return (
        <div className={styles.priceMenu} onClick={(e) => e.stopPropagation()} >
            {prices.map((e, i) => {
                return <PriceComponent key={i} handleChange={handleChange} ele={e} />
            })}
        </div>
    )
}