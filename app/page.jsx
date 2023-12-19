import db from "@/aws-config";
import { ScanCommand } from "@aws-sdk/client-dynamodb";
import Link from "next/link";
import "./home.css";

export default async function Home() {
  const db_params = {
    TableName: "Bobooks",
  };

  let books = await db.send(new ScanCommand(db_params));
  books = books.Items;
  return (
    <main>
      <div className="heading">
        <h1><span>Our</span></h1>
        <h1>Best Seller<span>.</span></h1>
      </div>

      <div id="card_container">
        {books.map((book) => {
          return (
            <div className="book_card" key={book.id.S}>
              <div className="book_card_img">
                {/* ScanCommand returns data with data type. */}
                {/* Example of response isbn: { N: '9780385548953' }  author: { S: 'John' } N: number S: string*/}
                <Link href={`/book/${book.id.S}`}>
                  <img src={`https://bookorbitassets.s3.amazonaws.com/bookimgs/${book.isbn.N}.jpg`} />
                </Link>
              </div>
              <div className="book_card_body">
                <span className="span_author">{book.author.S}</span>
                <Link href={`/book/${book.id.S}`}>
                  <h3>{book.title.S}</h3>
                </Link>
                <span className="span_price">${book.price.N / 100}</span>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
