import { useState } from "react"

export default function DonateBooksForm() {
    const [pages, setPages] = useState({
        page1: true,
        page2: false
    })
    const [radio, setRadio] = useState("")
    const [donateBook, setDonateBook] = useState({
        Title: "",
        Author: "",
        State: ""
    })
    const [donateForm, setDonateForm] = useState({
        books: [],
        Contact: "",
        Address: "",
        PostalCode: "",
        DeliveryDateDay: "",
        DeliveryDateTime: "",
        TotalAmount: "",
        DonateResell: ""
    })
    const donateResell = [
        { value: 'Donate', label: 'Donate' },
        { value: 'Resell', label: 'Resell' },
    ]

    function addBooks() {
        donateForm.books.push(donateBook)
        setDonateBook({
            Title: "",
            Author: "",
            State: ""
        })
    }

    return (

        <form onSubmit={(e) => {
            e.preventDefault(),
                console.log(donateForm)
        }}>
            {pages.page1 && (<div>
                <label>Book Information:
                    <label>Title
                        <input value={donateBook.Title} onChange={(e) => setDonateBook({ ...donateBook, Title: e.target.value })} type="text" />
                    </label>
                    <label>Author
                        <input value={donateBook.Author} onChange={(e) => setDonateBook({ ...donateBook, Author: e.target.value })} type="text" />
                    </label>
                    <label>State
                        <input value={donateBook.State} onChange={(e) => setDonateBook({ ...donateBook, State: e.target.value })} type="text"></input>
                    </label>
                </label>
                {
                    donateForm.books.map((e, i) => {
                        return (
                            <div key={`${e.Title} ${i}`}>
                                <p>{e.Title}</p>
                                <p>{e.Author}</p>
                                <p>{e.State}</p>
                            </div>
                        )
                    })
                }
                <button onClick={(e) => {
                    addBooks(),
                        e.preventDefault()
                }}>Add</button>
                <button onClick={(e) => {
                    e.preventDefault(),
                        setPages({ page1: false, page2: true })
                }}>Next Page</button>
            </div>)}

            {pages.page2 && (<div>
                <label>Contact
                    <input onChange={(e) => setDonateForm({ ...donateForm, Contact: e.target.value })} type="number" />
                </label>
                <label>Address
                    <input onChange={(e) => setDonateForm({ ...donateForm, Address: e.target.value })} type="text" />
                </label>
                <label>Postal Code
                    <input onChange={(e) => setDonateForm({ ...donateForm, PostalCode: e.target.value })} type="number" />
                </label>
                <label>Delivery Date
                    <input onChange={(e) => setDonateForm({ ...donateForm, DeliveryDateDay: e.target.value })} type="date" />
                    <input onChange={(e) => setDonateForm({ ...donateForm, DeliveryDateTime: e.target.value })} type="time" />
                </label>
                <label>Total Amount
                    <input onChange={(e) => setDonateForm({ ...donateForm, TotalAmount: e.target.value })} type="number" />
                </label>
                {
                    donateResell.map((o) => (
                        <label onClick={(e) => setDonateForm({ ...donateForm, DonateResell: o.value })} htmlFor={o.value} key={o.value}>
                            <input
                                id={o.value}
                                type="radio"
                                value={o.value}
                                checked={radio === o.value}
                                onChange={(event) => setRadio(event.target.value)}
                            />
                            {o.label}
                        </label>
                    ))
                }
                <input value="Confirm Data" type="submit" />
                <button onClick={(e) => {
                    e.preventDefault(),
                        setPages({ page1: true, page2: false })
                }}>Previous Page</button>
            </div>)}

        </form>
    )
}