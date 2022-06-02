import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styles from "../../styles/bookPage.module.css"

export default function Book() {
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    CallBookFindOne()
    // codes using router.query
  }, [router.isReady]);

  useEffect(() => {
    console.log(localStorage.getItem("User"))
    if (!localStorage.getItem("User")) {
      router.push("/user")
      console.log(localStorage.getItem("User"))
    }

  }, [])

  const [state, setState] = useState({})

  async function CallBookFindOne() {
    try {
      const id = router.query.bookId
      const res = await fetch(
        '/api/bookFindOne/', {
        body: JSON.stringify({ id }),
        headers: {
          "Content-Type": "application/json"
        },

        method: "POST"
      })

      const json = await res.json()
      console.log(json)
      setState(json)
    } catch (err) {
      console.log(err)
    }
    //console.log(state) 
  }

  const submit = async () => {
    console.log("Cliquei no submit")
    console.log("User: " + localStorage.getItem('User'))
    console.log("Book: " + state._id)
    const res = await fetch(
      '/api/cart/', {
      body: JSON.stringify({ clientId: localStorage.getItem('User'), bookId: state._id, quantity: 1 }),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    console.log("res: " + res)
    const json = await res

    console.log("json: " + json)

  }

  //console.log("Cart: "+localStorage.getItem('Seccione'))
  //console.log("User: "+localStorage.getItem('User'))
  //console.log("Book: "+state._id)



  return (
    <div className={styles.container}>
      {state &&
        <div>
          <div className={styles.imageCart}>
            <img className={styles.image} src={`/${state.imageLink}`} />
            <button onClick={submit} className={styles.button}>Add to Cart</button>
          </div>
          <div>
            <p className={styles.name}>{state.name}</p>
            <p className={styles.author}>{state.author}</p>
            <p className={styles.genre}>{state.genre}</p>
            <p className={styles.description}>{state.description}</p>
            <p className={styles.price}>{state.price}C</p>
          </div>
        </div>}
    </div>)
}