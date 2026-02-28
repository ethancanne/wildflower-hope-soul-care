import type { Metadata } from 'next';
import { Noto_Sans, Newsreader, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/layout/navbar.layout';
import Footer from '@/layout/footer.layout';

const newsreader = Newsreader({
  variable: '--font-serif',
  subsets: ['latin'],
});

const notoSans = Noto_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
});

const display = Playfair_Display({
  variable: '--font-display',
  subsets: ['latin'],
  display: 'swap',
  style: 'italic',
});

export const metadata: Metadata = {
  title: 'Wildflower Hope Soul Care',
  description: 'Where broken ground becomes holy ground.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${newsreader.variable} ${notoSans.variable} ${display.variable} antialiased  `}
      >
        <div className="font-serif">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
