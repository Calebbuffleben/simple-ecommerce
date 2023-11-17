import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '@/utils/provider';
import { Provider } from 'react-redux';
import store from './store/store';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Simple Ecommerce',
  description: 'A simple ecommerce frontend',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}><Provider store={store} ><Providers>{children}</Providers></Provider></body>
    </html>
  )
}
