import DonatedBook from "./DonatedBook"

export default function DonatedList({ books }) {
    return (
        <div>
            {books.map((e, i) => {
                return (
                    <DonatedBook key={`${e.id} ${i}`} book={e} />
                )
            })}
        </div>
    )
}