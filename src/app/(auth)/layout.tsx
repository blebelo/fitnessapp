
import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/providers/AuthProvider";

export const metadata: Metadata = {
  title: "NutriSync",
  description: "Meal Prep Made Easy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider >
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
