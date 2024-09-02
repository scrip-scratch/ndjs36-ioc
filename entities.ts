import { inject, injectable } from "inversify";
import { Book, BooksRepository } from "./interfaces";
import { TYPES } from "./types";
import { BookScheme } from "./BookScheme";

@injectable()
export class Library implements BooksRepository {
  private bookScheme: typeof BookScheme;

  public constructor(@inject(TYPES.BookScheme) bookScheme: typeof BookScheme) {
    this.bookScheme = bookScheme;
  }

  public async createBook(book: Book) {
    const newBook = new this.bookScheme(book);
    return await newBook.save();
  }

  public async getBook(id: string): Promise<Book | null> {
    const booksResponse = await this.bookScheme.find({ id: id });
    return booksResponse[0] ? (booksResponse[0] as Book) : null;
  }

  public async getBooks(): Promise<Book[]> {
    return await this.bookScheme.find();
  }

  public async updateBook(id: string) {
    const booksResponse = await this.bookScheme.find({ id: id });
    return booksResponse[0] ? (booksResponse[0] as Book) : null;
  }
  public async deleteBook(id: string) {
    return await this.bookScheme.deleteOne({ id: id });
  }
}
