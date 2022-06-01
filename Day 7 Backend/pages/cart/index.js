import { useEffect } from "react"
import CartComponent from "../../components/cartComponents/Cart"


function CartPage() {
    useEffect(() => {
        console.log(localStorage.getItem("token"))

    }, [])
    return (
        <div>
            <h1>THIS IS A CART</h1>
            <CartComponent />
        </div>


    )
}
export default CartPage 