export default function DonatedBook({ book }) {
    return (
        <div>
            <div><img src="#" /></div>
            <p>{book.name}</p>
            <p>{book.author}</p>
            <p>{book.currentStatus}</p>
        </div>
    )
}