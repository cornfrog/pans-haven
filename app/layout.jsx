import TopBar from "./components/TopBar";
import "./globals.scss";
// import favicon from "./favicon.ico"

export const metadata = {
  title: "Pan's Haven",
  description: "For all companions",
  // icon: favicon
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        {children}
      </body>
    </html>
  );
}
