import { useState } from "react";
import { useEffect } from "react";
import AddCredits from "../../../components/CreditsPage/AddCredits";
import CircleCredits from "../../../components/CreditsPage/CircleCredits";
import styles from "../../../styles/credits.module.css"

export default function CreditsPage({data}) {
    console.log(data)
    const [credits, setCredits] = useState(0)
    const [cred, setCred] = useState(0)
    
    console.log("cathin recebido do usuario: "+credits)
    useEffect(() => {
        async function CallBackUser() {
            console.log(localStorage.getItem("User"))
            const res = await fetch(
                '/api/getUser/', {
                body: JSON.stringify({userId:localStorage.getItem("User")}),
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST"
            })
            const json = await res.json()
            console.log(json)
            setCredits(Number(json.credits))
            localStorage.setItem("Credits", json.credits)
            
        }
        
        CallBackUser()
    
    }, [])
    




    async function addCredits() {
        if (cred < 0) { setCred(0) }
        else {
                
            setCredits(c => c + Number(cred))
                
            async function CallBackCredits() {
                console.log("catchim pro backend credits: "+ credits)
                console.log("User: "+localStorage.getItem("User"))
                const res = await fetch(
                    '/api/updateCredits/', {
                    body: JSON.stringify({
                        userId:localStorage.getItem("User"),
                        credits: cred
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
        <div className={styles.creditPage}>
            <p>Credits</p>
            <div className={styles.circle}>
                {credits}C
            </div>
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
        </div>
    )
}

