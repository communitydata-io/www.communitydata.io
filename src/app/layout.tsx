import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Community Data",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-screen">
      <body className={`${inter.className} min-h-screen`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="grow p-8">{children}</div>
          <div className="grow-0 p-4 px-8 flex items-center text-gray-600">
            &copy; Community Data {new Date().getFullYear()}
          </div>
        </div>
      </body>
    </html>
  );
}
