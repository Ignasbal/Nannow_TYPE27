import { Inter, Nunito } from "next/font/google";
import "./globals.css";

// Font #1
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
// Font #2
const nunito = Nunito({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  // Tab name
  title: "Nannow",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${nunito.className}`}>
        {children}
      </body>
    </html>
  );
}
