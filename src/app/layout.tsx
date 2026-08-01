import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://angelperez.io"),
  title: "Ángel Pérez — Software Engineer • Designer",
  description:
    "Full-stack design engineer building human-centered digital products.",
  openGraph: {
    title: "Ángel Pérez — Software Engineer • Designer",
    description:
      "Full-stack design engineer building human-centered digital products.",
    url: "https://angelperez.io",
    siteName: "Ángel Pérez",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ángel Pérez — Software Engineer • Designer",
    description:
      "Full-stack design engineer building human-centered digital products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bricolageGrotesque.variable} h-full scroll-smooth antialiased`}>
      <body className="flex min-h-full flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
