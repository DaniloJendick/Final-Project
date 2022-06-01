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
        <div
            className={styles.credits}>

            <div>
                <p className={styles.creditsTitle}>Add Credits</p>
                <p className={styles.creditsInfo}>Credit Card Information</p>
                <form className={styles.form} onSubmit={(e) => {
                    e.preventDefault(),
                        addCredits()
                }}>
                    <input className={styles.input} value={cred} onChange={(e) => setCred(e.target.value)} type="number" placeholder="Insert Credit Amount"></input>
                    <input className={styles.buttonAdd} value="Add" type="submit" />
                </form>
            </div>
        </div>
    )
}