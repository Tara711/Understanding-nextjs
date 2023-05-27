import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Tara Prasad Shrestha",
  description: "Learn Web development",
  keywords: "Web development, web design, javascript, react",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
