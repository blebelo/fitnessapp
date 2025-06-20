import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/providers/AuthProvider";
import { TrainerProvider } from "@/providers/TrainerProvider";
import { FoodProvider } from "@/providers/FoodProvider";

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
        <FoodProvider>
          <html lang="en">
            <body>{children}</body>
          </html>
        </FoodProvider>
      </TrainerProvider>
    </AuthProvider>
  );
}
