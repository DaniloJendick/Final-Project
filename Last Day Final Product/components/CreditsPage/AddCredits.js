import { useState } from "react"
import { useEffect } from "react"
import styles from "../../styles/credits.module.css"



    // Perform localStorage action



export default function AddCredits(a) {
    if (typeof window !== 'undefined') {
    const [creditos, setCreditos] = useState(localStorage.getItem("Credits"))
    
    console.log("cathin recebido do usuario: "+creditos)
    const [cred, setCred] = useState(10)
    
    async function addCredits() {
        if (cred < 0) { setCred(0) }
        else {
            
            setCreditos(Number(cred)+Number(creditos))
            
            async function CallBackCredits() {
               
                console.log("catchim pro backend a: "+a)
                console.log("catchim pro backend credits: "+ creditos)
                console.log("User: "+localStorage.getItem("User"))
                const res = await fetch(
                    '/api/updateCredits/', {
                    body: JSON.stringify({
                        userId:localStorage.getItem("User"),
                        credits: creditos
                        //batota
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "POST"
                })
                const json = await res.json()
                console.log(json)
                localStorage.setItem("Credits", json.credits)
                console.log(localStorage)
                
            }
            
            await CallBackCredits()
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
}