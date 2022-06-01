import Image from "next/image";

export default function CartBook({ book, removeFunc }) {
    return (
        <div>
            <div><img src={book.image} /></div>
            <p>{book.name}</p>
            <p>{book.author}</p>
            <p>{book.price}</p>
            <button onClick={() => removeFunc(book._id)}></button>
        </div>
    )
}