import styles from "../../../styles/filtermenu.module.css"
export default function StateComponent({ handleChange, ele }) {
    return (
        <button className={styles.button} onClick={() => { handleChange("state", ele) }}>{ele}</button>
    )
}