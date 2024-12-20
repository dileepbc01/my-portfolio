import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { cn } from '@/lib/utils';
import { Inter as FontSans } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Dileep Chidanandamurthy',
  description: '',
};

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen bg-background from-[#43434330] via-[#32323230] via-25% font-sans antialiased dark:bg-gradient-to-b',
          fontSans.variable
        )}
      >
        <ThemeProvider attribute={'class'} defaultTheme='dark'>
          <main className='mx-auto max-w-2xl py-4 md:pt-10'>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
