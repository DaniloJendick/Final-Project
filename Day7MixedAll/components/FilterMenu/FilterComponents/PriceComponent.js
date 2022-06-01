import styles from "../../../styles/filtermenu.module.css"
export default function PriceComponent({ handleChange, ele }) {
    return (
        <button className={styles.button} onClick={(e) => { handleChange("price", ele) }}>{ele}</button>
    )
}