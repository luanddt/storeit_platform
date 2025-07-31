import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "StoreIt",
  description: "StoreIt Platform"
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className={`bg-white min-h-screen ${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;