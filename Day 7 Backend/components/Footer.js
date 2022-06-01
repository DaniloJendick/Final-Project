import Link from "next/link"
import { useState } from "react"
import styles from "../styles/footer.module.css"
export default function Footer() {
    const [icons, setIcons] = useState([{
        link: "/",
        name: "Home",
        image: "#"
    }, {
        link: "/user",
        name: "User",
        image: "#"
    }, {
        link: "/donate",
        name: "Donate",
        image: "#"
    }, {
        link: "/wishlist",
        name: "Wishlist",
        image: "#"
    }, {
        link: "/cart",
        name: "Cart",
        image: "#"
    }])
    return (
        <div className={styles.footer}>
            {
                icons.map((e, i) => {
                    return (
                        <Link key={i} href={e.link}><div className={styles.icons}>
                            <p>{e.name}</p>
                        </div></Link>
                    )
                })
            }
        </div>
    )
}