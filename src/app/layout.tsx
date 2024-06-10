import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "60 Жас Мерей Той",
  description: "60 Жас Мерей Той",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
