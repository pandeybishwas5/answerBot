import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider} from '@clerk/nextjs'
import Providers from "@/components/Providers"
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AnswerBot-PDF",

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <Providers>
        <html lang="en">
          <body>
            <div className={inter.className}>
              {children}
              <Toaster />
            </div>
          </body>
        </html>
      </Providers>
    </ClerkProvider>
  );
}
