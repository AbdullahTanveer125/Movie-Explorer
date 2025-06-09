// src/app/layout.js
import './globals.css';
import { Inter } from 'next/font/google';
import Providers from '../components/Providers'; // <- make sure path is correct

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Movie Explorer',
  description: 'Explore movies, shows, and more.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers> {/* ✅ Context used in a client component */}
      </body>
    </html>
  );
}
