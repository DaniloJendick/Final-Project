import { useEffect, useState } from "react"
import CartBook from "./CartBook"
import Link from "next/link"

export default function CartComponent() {
    const [books, setBooks] = useState([])

    //RECEBE UM FETCH DO CARRINHO DO BACKEND
    useEffect(() => {
        console.log("User: "+localStorage.getItem('User'))
        async function CallBackCart() {
            const res = await fetch(
                '/api/cartFakeGet/', {
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({user:localStorage.getItem('User')}),
                method: "POST"
            })
            const json = await res.json()
            
            setBooks(json)
            console.log(books)
        }
        CallBackCart()
    }, [])




    const [saldo, setSaldo] = useState(45)

    const price = books?.reduce((acc, e) => {
        return acc + (e.price)
    }, 0)

    async function DeleteFromCart(id) {
        console.log("A enviar")
        console.log(books.filter(ele => ele._id !== id))
        const res = await fetch(
            '/api/deleteItemFromCart', {
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({user:localStorage.getItem('User'), arrayBooks: books.filter(ele => ele._id !== id)}),
            method: "POST"
        })
        console.log(res)
        // const json = await res.json()
        
    }

    function deleteCartBook(e) {
        
        setBooks(prev => prev.filter(ele => ele._id !== e))
        DeleteFromCart(e)
    }
    function realizarCompra() {
        setBooks([])
        setSaldo(prev => prev - price)
    }




    console.log(books)

    return (
        
        <div>
            {books ? books.map(e => {
                return (
                    <CartBook key={e._id} book={e} removeFunc={deleteCartBook} />
                )
            }): ""}
            <div>Total: {price}C</div>
            <div>Saldo: {saldo}C</div>
            {saldo < price ?
                <Link href="/user/credits"><button>Charge Account</button></Link> :
                <button onClick={() => realizarCompra()}>Comprar</button>}
        </div>
    )
}