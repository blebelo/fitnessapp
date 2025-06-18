
import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/providers/AuthProvider";
import { TrainerProvider } from "@/providers/TrainerProvider";

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
    <AuthProvider>
      <TrainerProvider>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
      </TrainerProvider>
    </AuthProvider>
  );
}
