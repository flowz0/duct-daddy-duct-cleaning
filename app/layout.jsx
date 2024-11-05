import { NextUIProvider } from "@nextui-org/react";
import Navibar from "./_components/Navibar";
import "./globals.css";

export const metadata = {
  title: "Duct Daddy Duct Cleaning",
  description: "Duct Cleaning based in Missouri, Kansas City",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <NextUIProvider>
          <Navibar />
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
