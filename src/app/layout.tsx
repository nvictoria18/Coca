'use client'

import { inter } from '@/fonts/inter';
import GlobalStyles from './global'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GlobalStyles />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
