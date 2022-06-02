import { useRouter } from "next/router"
import { useEffect } from "react";
export default function Wishlist() {
    const router = useRouter()
    useEffect(() => {
        console.log(localStorage.getItem("User"))
        if (!localStorage.getItem("User")) {
            router.push("/user")
            console.log(localStorage.getItem("User"))
        }
    }, [])
    return (
        <h1>WishList Here</h1>
    )
}