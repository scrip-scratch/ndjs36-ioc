import { Container } from "inversify";
import { TYPES } from "./types";
import { BooksRepository } from "./interfaces";
import { Library } from "./entities";

const container = new Container();
container.bind<BooksRepository>(TYPES.BooksRepository).to(Library);


export { container };