import Book from "./Book"
import styles from "../styles/book.module.css"
import { useEffect, useState } from "react"
export default function StoreBooks() {
    const [state, setState] = useState([])
    useEffect(() => {
        async function CallBack(){
          const res = await fetch(
            '/api/books/', {
            headers: {
              "Content-Type": "application/json"
            },
            method: "GET"
          })
          const json = await res.json()
          setState(json)
        }
        CallBack()
      }, [])

    
    return (
        
        <div className={styles.storeMain}>
            <div className={styles.storeBooks}>
                {state ? state.map((e,i) => {
                    
                    return <Book id={e._id} key={e._id} book={e} />
                }): ""}
            </div>
        </div>
    )
}