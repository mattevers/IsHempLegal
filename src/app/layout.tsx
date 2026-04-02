import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Is Hemp Legal? — Delta-8, CBD & THCA Laws by State",
    template: "%s | Is Hemp Legal?",
  },
  description:
    "Instantly check if Delta-8, CBD, THCA, HHC, and other hemp products are legal in your state. Free, accurate, updated for 2026 federal changes.",
  metadataBase: new URL("https://ishemplegal.com"),
  openGraph: {
    siteName: "Is Hemp Legal?",
    type: "website",
    locale: "en_US",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Is Hemp Legal?",
  url: "https://ishemplegal.com",
  description:
    "Hemp and Delta-8 legality checker for all 50 US states.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://ishemplegal.com/states/{search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(orgSchema).replace(/</g, "\\u003c"),
          }}
        />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
