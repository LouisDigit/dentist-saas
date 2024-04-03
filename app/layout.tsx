import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { auth } from "@/auth";
import Navbar from "@/components/ui/navbar";
import { ThemeProvider } from "@/providers/theme-provider";
import { ToasterProvider } from "@/providers/toast-provider";

const inter = Inter({ subsets: ["latin"] });

async function getSession() {
  const response = await auth();

  return response;
}

export const metadata: Metadata = {
  title: "My SaaS",
  description: "Boilerplate of SaaS builder in Next JS",
  icons: {
    icon: "logo.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} dark:bg-neutral-950`}
      >
        <link rel="icon" href="/images/logo.svg" sizes="any" />
        <ToasterProvider />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <main className="flex flex-col h-screen">
            <Navbar />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
