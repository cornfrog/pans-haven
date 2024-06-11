import TopBar from "./components/TopBar";
import "./globals.scss";


export const metadata = {
  title: "Pan's Haven",
  description: "For all companions",
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
