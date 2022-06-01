import DonateBooksForm from "../../components/DonateBooksForm";
import Link from "next/link"
import { useEffect } from "react";

export default function Donate() {
    useEffect(() => {
        console.log(localStorage.getItem("token"))

    }, [])
    return (
        <div>
            <h1>Donate Books</h1>
            <Link href="/donate/check">Check Donations</Link>
            <Link href="/donate/form">Donate Books</Link>
        </div>

    )
}