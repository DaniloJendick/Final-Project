import { useState } from "react"
import Link from "next/link"
import { useEffect } from "react"

export default function Profile() {
    const [user, setUser] = useState({})
        /*
        _id: "62920c923c5cadaf5bfa0b01",
        phone: 985673990,
        name: "danilo Jendick",
        email: "danilo@jendick.com",
        password: "123abcAbc!",
        age: 96,
        sex: "Female",
        morada: "mesma rua do Danilo",
        points: 0
    })*/
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
            setUser(json)
            localStorage.setItem("Credits", json.credits)
            
        }
        
        CallBackUser()  
    
    }, [])

    const [checkEdit, setCheckEdit] = useState({
        Username: false,
        Email: false,
        PhoneNumber: false,
        Password: false
    })
    const [editing, setEditing] = useState({
        Username: "",
        Email: "",
        PhoneNumber: "",
        Password: ""
    })




    return (
        <div>
            <h1>THIS IS A USER PROFILE</h1>
            <input type="text" /><img src="#" />


            {!checkEdit.Username ?
                <p>Username: {user?.name}</p> :
                <input onChange={(e) => setEditing({ ...editing, Username: e.target.value })} value={editing.Username} placeholder="Insert new Username" type="text" />
            }
            <button
                onClick={() => {
                    setCheckEdit({ ...checkEdit, Username: !checkEdit.Username }),
                        checkEdit.Username && (setUser({ ...user, name: editing.Username }), setEditing({ ...editing, Username: "" }))
                }}
            >{">"}</button>


            {!checkEdit.Email ?
                <p>Email: {user?.email}</p> :
                <input onChange={(e) => setEditing({ ...editing, Email: e.target.value })} value={editing.Email} placeholder="Insert new Email" type="email" />
            }
            <button
                onClick={() => {
                    setCheckEdit({ ...checkEdit, Email: !checkEdit.Email }),
                        checkEdit.Email && (setUser({ ...user, email: editing.Email }), setEditing({ ...editing, Email: "" }))
                }}
            >{">"}</button>
            {!checkEdit.PhoneNumber ?
                <p>Phone Number: {user?.phone}</p> :
                <input onChange={(e) => setEditing({ ...editing, PhoneNumber: e.target.value })} value={editing.PhoneNumber} placeholder="Insert Phone Number" type="number" />
            }
            <button
                onClick={() => {
                    setCheckEdit({ ...checkEdit, PhoneNumber: !checkEdit.PhoneNumber }),
                        checkEdit.PhoneNumber && (setUser({ ...user, phone: editing.PhoneNumber }), setEditing({ ...editing, PhoneNumber: "" }))
                }}
            >{">"}</button>

            {!checkEdit.Password ?
                <p>Password: {user.password?.split("").reduce((acc, e) => acc + "*", "")}</p> :
                <input onChange={(e) => setEditing({ ...editing, Password: e.target.value })} value={editing.Password} placeholder="Insert new Password" type="password" />
            }
            <button
                onClick={() => {
                    setCheckEdit({ ...checkEdit, Password: !checkEdit.Password }),
                        checkEdit.Password && (setUser({ ...user, password: editing.Password }), setEditing({ ...editing, Password: "" }))
                }}
            >{">"}</button>
            <Link href="/user/credits" ><button>Add Credits</button></Link>
        </div>
    )
}