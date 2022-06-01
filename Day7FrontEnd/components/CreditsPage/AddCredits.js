import { useState } from "react"
import styles from "../../styles/credits.module.css"

export default function AddCredits({ credits, setCredits }) {
    const [cred, setCred] = useState("")
    const [credAdd, setCredAdd] = useState("")
    function addCredits() {
        if (cred < 0) { setCred(0) }
        else {
            setCredits(credits + Number(cred))
            setCred("")
            console.log(credits)
        }
    }
    return (
        <div>
            <p>Add Credits</p>
            <p>Credit Card Information</p>
            <form onSubmit={(e) => {
                e.preventDefault(),
                    addCredits()
            }}>
                <input value={cred} onChange={(e) => setCred(e.target.value)} type="number" placeholder="Insert Credit Amount"></input>
                <input value="Add" type="submit" />
            </form>
        </div>
    )
}