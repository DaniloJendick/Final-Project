import { useState } from "react"

export default function DonateBooksForm() {
    const [states, setStates] = useState([
        {
            state: "New",
            value: "new"
        },
        {
            state: "Used",
            value: "used"
        },
        {
            state: "Very Used",
            value: "veryUsed"
        },
        {
            state: "Refurbished",
            value: "refurbished"
        }
    ])
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

        <form className={styles.pickupForm} onSubmit={(e) => {
            e.preventDefault(),
                console.log(donateForm)
        }}>
            {pages.page1 && (
                <div className={styles.formRelative}>
                    <p className={styles.pageSubTitle}>Book information:</p>
                    <p>Title</p>
                    <input value={donateBook.Title} onChange={(e) => setDonateBook({ ...donateBook, Title: e.target.value })} type="text" />

                    <p>Author</p>
                    <input value={donateBook.Author} onChange={(e) => setDonateBook({ ...donateBook, Author: e.target.value })} type="text" />

                    <p>State</p>
                    <select className={styles.dropDown} value={donateBook.State} onChange={(e) => setDonateBook({ ...donateBook, State: e.target.value })} type="text">
                        {states.map((e, i) => {
                            return (
                                <option value={e.value} key={i} >{e.state}</option>
                            )
                        })}
                    </select>
                    <button className={styles.addBooks} onClick={(e) => {
                        addBooks(),
                            e.preventDefault()
                    }}>Add</button>

                    {
                        donateForm.books.map((e, i) => {
                            return (
                                <div className={styles.book} key={`${e.Title} ${i}`}>
                                    <p>{e.Title}</p>
                                </div>
                            )
                        })
                    }

                    <button className={styles.pagemove} onClick={(e) => {
                        e.preventDefault(),
                            setPages({ page1: false, page2: true })
                    }}>Next Page</button>
                </div>)}

            {pages.page2 && (<div className={styles.formRelative}>
                <p className={styles.pageSubTitle}>Personal Data:</p>
                <p className={styles.page}>Contact</p>
                <input onChange={(e) => setDonateForm({ ...donateForm, Contact: e.target.value })} type="number" />

                <p>Address</p>
                <input onChange={(e) => setDonateForm({ ...donateForm, Address: e.target.value })} type="text" />

                <p>Postal Code</p>
                <input onChange={(e) => setDonateForm({ ...donateForm, PostalCode: e.target.value })} type="number" />

                <p>Delivery Date</p>
                <div className={styles.grid}>
                    <input onChange={(e) => setDonateForm({ ...donateForm, DeliveryDateDay: e.target.value })} type="date" />
                    <input onChange={(e) => setDonateForm({ ...donateForm, DeliveryDateTime: e.target.value })} type="time" />
                </div>
                <div className={styles.radio}>
                    {
                        donateResell.map((o) => (<div className={styles.labels} key={o.value}>
                            <div>{o.label}</div>
                            <label className={styles.radioButton} onClick={(e) => setDonateForm({ ...donateForm, DonateResell: o.value })} htmlFor={o.value} key={o.value}>
                                <input
                                    id={o.value}
                                    type="radio"
                                    value={o.value}
                                    checked={radio === o.value}
                                    onChange={(event) => setRadio(event.target.value)}
                                />

                            </label>
                        </div>
                        ))
                    }
                </div>
                <input className={styles.confirm} value="Confirm Data" type="submit" />
                <button className={styles.pagemove} onClick={(e) => {
                    e.preventDefault(),
                        setPages({ page1: true, page2: false })
                }}>Previous Page</button>
            </div>)}

        </form>
    )
}