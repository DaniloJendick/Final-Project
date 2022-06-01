import { useState } from "react"
import CartBook from "./CartBook"
import Link from "next/link"
import styles from "../../styles/cart.module.css"

export default function CartComponent() {
    //RECEBE UM FETCH DO CARRINHO DO BACKEND
    const [saldo, setSaldo] = useState(45)


    const [books, setBooks] = useState(
        [
            { title: "Lorem", author: "Ipsum", image: "#", price: 15, _id: 123212421 },
            { title: "Lo11rem", author: "Ips11um", image: "#", price: 20, _id: 12321284357 },
            { title: "Lo11redwwdm", author: "Ipsss11um", image: "#", price: 60, _id: 12321286776357 }]
    )

    const price = books.reduce((acc, e) => {
        return acc + e.price
    }, 0)


    function deleteCartBook(e) {
        setBooks(prev => prev.filter(ele => ele._id !== e))
    }
    function realizarCompra() {
        setBooks([])
        setSaldo(prev => prev - price)
    }

    return (
        <div className={styles.cartContainer} >
            <div className={styles.cart}>
                {books.map(e => {
                    return (
                        <CartBook key={e._id} book={e} removeFunc={deleteCartBook} />
                    )
                })}
                <div className={styles.total}>
                    <div>Total: </div>
                    <div>{price}C</div>
                </div>
                <div className={styles.saldo}>
                    <div>Saldo:</div>

                    <div>{saldo}c</div></div>
                <div className={styles.purchaseButton}>
                    {saldo < price ?
                        <Link href="/user/credits"><button>Charge Account</button></Link> :
                        <button onClick={() => realizarCompra()}>Comprar</button>}
                </div>
            </div>
        </div>
    )
}