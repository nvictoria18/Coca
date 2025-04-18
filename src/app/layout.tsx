'use client'

import { inter } from '@/fonts/inter';
import GlobalStyles from './global'
import styled from 'styled-components';

const Body = styled.body`
  margin: 0px;
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GlobalStyles />
      <Body className={inter.className}>
        {children}
      </Body>
    </html>
  );
}
