import express = require("express");
import mongoose = require("mongoose");
import { Container } from "inversify";
import { Book, BooksRepository } from "./interfaces";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));

const container = new Container();

app.get(":id", async (req, res) => {
  const repo = container.get(BooksRepository);
  const book: Book | null = await repo.getBook(req.params.id);

  if (book) {
    res.render("book", {
      book: book,
    });
  } else {
    res.render("404", {
      errorMessage: "Книга не найдена",
    });
  }
});

async function start(PORT: string | number, dbUrl: string) {
  try {
    await mongoose.connect(dbUrl);
    app.listen(PORT, () => console.log(`server is started on port ${PORT}`));
  } catch (error) {
    console.error(error);
  }
}

const dbUrl = "mongodb://root:example@mongo:27017/library?authSource=admin";
const PORT = process.env.PORT || 3000;

start(PORT, dbUrl);
