import db from "@/aws-config";
import { GetItemCommand } from "@aws-sdk/client-dynamodb";
import AddBtns from "./AddBtns";
import "./book.css";

export default async function Book({ params }) {
  const bookId = params.id;

  const db_params = {
    TableName: "Bobooks",
    Key: { id: { S: bookId } },
  };

  let book = await db.send(new GetItemCommand(db_params));
  book = book.Item;

  return (
    <div className="book_page">
      <div>
        <img src={`https://bookorbitassets.s3.amazonaws.com/bookimgs/${book.isbn.N}.jpg`} />
      </div>

      <div className="book_details">
        <div>
          <h1>{book.title.S}</h1>
          <p className="author_name">
            by <span>{book.author.S}</span>
          </p>
        </div>

        <div className="book_overview">
          <h2>Book Overview</h2>
          <b>{book.desc_header.S}</b>
          <p>{book.description.S}</p>
        </div>

        <AddBtns isbn={book.isbn.N} />

        <div>
          <h3>Book details</h3>
          <p>ISBN: {book.isbn.N}</p>
          <p>Publisher: {book.publisher.S}</p>
          <p>Length: {book.pages.S} pages</p>
        </div>
      </div>

      <div className="price_tag">
        <p>${book.price.N / 100}</p>
      </div>
    </div>
  );
}
