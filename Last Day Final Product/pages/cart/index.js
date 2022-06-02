import { useEffect } from "react"
import CartComponent from "../../components/cartComponents/Cart"
import { useRouter } from "next/router"

function CartPage() {
    const router = useRouter()
    useEffect(() => {
        console.log(localStorage.getItem("User"))
        if (!localStorage.getItem("User")) {
            router.push("/user")
            console.log(localStorage.getItem("User"))
        }
    }, [])

    return (
        <div>
            <CartComponent />
        </div>


    )
}
export default CartPage 