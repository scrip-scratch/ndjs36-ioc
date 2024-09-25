export interface Book {
  id: string;
  title: string;
  description: string;
  authors: string;
  favorite: string;
  fileCover: string;
  fileName: string;
  fileBook: string;
}

export abstract class BooksRepository {
  createBook(book: Book) {}
  getBook(id: string): Promise<Book | null> {
    return;
  }
  getBooks(): Promise<Book[]> {
    return;
  }
  updateBook(id: string): Promise<Book | null> {
    return;
  }
  deleteBook(id: string) {}
}

// test
