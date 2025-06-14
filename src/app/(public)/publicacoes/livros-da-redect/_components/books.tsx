import { getBooks, IBook } from "@services/redect-books/redect-books";

import { Book } from "./book";

export async function Books() {
  const books = await getBooks();

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
      {books.map((book: IBook) => (
        <Book key={book.volume} book={book} />
      ))}
    </div>
  );
}
