'use client';

import { DetailedHTMLProps, HTMLAttributes } from 'react';
import './globals.css'
import { Inter } from 'next/font/google'
import Transition from '@/components/effect/Transition';
import { motion } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element)
}

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: DetailedHTMLProps<HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
