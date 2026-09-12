import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Evoc Labs | Scale Your E-commerce Brand",
  description:
    "Apply to work with Evoc Labs and build a profitable, scalable e-commerce brand.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
