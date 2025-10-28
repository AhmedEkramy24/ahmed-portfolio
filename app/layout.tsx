import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./_Components/Navbar/Navbar";
import Banner from "./_Components/Home/Banner";
import Footer from "./_Components/Footer/Footer";

const figtree = Figtree({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ahmed-ekramy-portfolio.vercel.app"), // ضع لينك موقعك الفعلي هنا
  title: {
    default: "Ahmed Ekramy | Front-End Developer",
    template: "%s | Ahmed Ekramy",
  },
  description:
    "Front-End Developer specializing in React, Next.js, and modern UI development. Explore my portfolio, projects, and contact info.",
  keywords: [
    "Ahmed Ekramy",
    "Front-End Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
    "Web Developer Egypt",
  ],
  authors: [
    {
      name: "Ahmed Ekramy",
      url: "https://ahmed-portfolio-ashen-ten.vercel.app/",
    },
  ],
  creator: "Ahmed Ekramy",
  publisher: "Ahmed Ekramy",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahmed-portfolio-ashen-ten.vercel.app/",
    title: "Ahmed Ekramy | Front-End Developer",
    description:
      "Front-End Developer specializing in React, Next.js, TypeScript, and modern UI design.",
    siteName: "Ahmed Ekramy Portfolio",
    images: [
      {
        url: "/imgs/ek.jpg",
        width: 1200,
        height: 630,
        alt: "Ahmed Ekramy Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Ekramy | Front-End Developer",
    description:
      "Explore my portfolio and front-end development projects built with React and Next.js.",
    images: ["/images/seo/og-image.jpg"],
    creator: "@AhmedEkramy",
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://ahmed-ekramy-portfolio.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.className} `}>
        <Navbar />
        <Banner />
        <div className="min-h-[70vh]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
