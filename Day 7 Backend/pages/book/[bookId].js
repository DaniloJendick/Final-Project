import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Book() {
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    CallBookFindOne()
    // codes using router.query
  }, [router.isReady]);

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
    console.log("User: "+localStorage.getItem('User'))
    console.log("Book: "+state._id)
    const res = await fetch(
      '/api/cart/', {
      body: JSON.stringify({clientId:localStorage.getItem('User'), bookId: state._id, quantity: 1}),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    console.log("res: "+ res)
    const json = await res

    console.log("json: "+ json)
    
  }

  //console.log("Cart: "+localStorage.getItem('Seccione'))
  //console.log("User: "+localStorage.getItem('User'))
  //console.log("Book: "+state._id)



  return (
    <h1>
      THIS IS A BOOK WITH ID:
      <div>
        {state._id}<br />
        {state.name}<br />
        {state._publisher}<br />
        <button type="button" onClick={submit}>Clique aqui para adicionar no carrinho, viva o comunismo!!</button>
      </div>
    </h1>)
}