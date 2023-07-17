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
          <div className="grow-0 p-4 px-8 flex items-center">
            <h1 className="text-2xl font-semibold flex items-center space-x-1">
              <span>community_data</span>
              <span>/</span>
              <span className="ml-2 text-green-800">root</span>
            </h1>{" "}
          </div>
          <div className="grow p-8">{children}</div>
          <div className="grow-0 p-4 px-8 flex items-center text-gray-600">
            &copy; Community Data {new Date().getFullYear()}
          </div>
        </div>
      </body>
    </html>
  );
}
