import { getBooks } from '@mocks/redect-books/redect-books'
import { Book } from './book'

export async function Books() {
  const books = await getBooks()

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
      {books.map((book) => (
        <Book book={book} key={book.volume} />
      ))}
    </div>
  )
}
