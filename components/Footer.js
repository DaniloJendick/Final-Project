import Link from "next/link"
import { useState } from "react"
import styles from "../styles/footer.module.css"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faCoffee, faDonate, faHeart, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCoffee} />




export default function Footer() {
    const [icons, setIcons] = useState([{
        link: "/",
        name: <FontAwesomeIcon icon={faHome} />,
        image: "#"
    }, {
        link: "/user",
        name: <FontAwesomeIcon icon={faUser} />,
        image: "#"
    }, {
        link: "/donate",
        name: <FontAwesomeIcon icon={faDonate} />,
        image: "#"
    }, {
        link: "/wishlist",
        name: <FontAwesomeIcon icon={faHeart} />,
        image: "#"
    }, {
        link: "/cart",
        name: <FontAwesomeIcon icon={faCartShopping} />,
        image: "#"
    }])
    return (
        <div className={styles.footer}>

            {
                icons.map((e, i) => {
                    return (
                        <Link key={i} href={e.link}><div className={styles.icons}>
                            {e.name}
                        </div></Link>
                    )
                })
            }
        </div>
    )
}