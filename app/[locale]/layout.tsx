import { Locale, routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import "./globals.css";

// --- Nhập các font từ Google Fonts ---
// Inter: Một font sans-serif hiện đại, phổ biến cho nội dung
import { Inter, Tektur, Orbitron } from "next/font/google"; // Nhập cả 3 font
import Header from "@/components/Common/Header";

// Khai báo font Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Khai báo font Tektur
const tektur = Tektur({
  subsets: ["latin"],
  variable: "--font-tektur",
  display: "swap",
});

// Khai báo font Orbitron
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Adwin - Facebook account agency",
  description: "Offcial website of Adwin",
  // --- THÊM PHẦN NÀY ĐỂ CẤU HÌNH FAVICON ---
  icons: {
    icon: "/images/logo_tab.svg", // Đường dẫn đến favicon.ico trong thư mục public
    // Bạn có thể thêm các biểu tượng khác ở đây
    // apple: '/apple-icon.png', // Ví dụ cho biểu tượng Apple Touch Icon
    // shortcut: '/icon.png', // Ví dụ cho shortcut icon
  },
  // ------------------------------------------
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  const { locale } = params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${tektur.variable} ${orbitron.variable} antialiased bg-[#050D10] text-white`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
