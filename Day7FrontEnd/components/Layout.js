import Footer from "./Footer";
import Header from "./Header";
import styles from "../styles/globalstyles.module.css"

export default function Layout(props) {
    return (
        <div className={styles.container}>
            <Header />
            <main>{props.children}</main>
            <Footer />
        </div>
    )
}