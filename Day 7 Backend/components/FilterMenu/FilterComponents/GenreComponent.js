import styles from "../../../styles/filtermenu.module.css"
export default function GenreComponent({ handleChange, ele }) {
    return (
        <button className={styles.button} onClick={() => { handleChange("genre", ele) }}>{ele}</button>
    )
}