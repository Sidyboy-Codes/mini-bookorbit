import Link from "next/link";
import Login from "./Login";
import "./globals.css";

export const metadata = {
  title: "Bookorbit",
  description: "Buy all books at one place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">
            <h1>Bookorbit</h1>
          </Link>
          <Login />
        </nav>
        {children}
      </body>
    </html>
  );
}
