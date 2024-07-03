import './globals.css';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import DataProvider from '@/app/_providers/DataContext';

const jetBrainsMono = JetBrains_Mono({
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetBrainsMono',
  subsets: ['latin', 'latin-ext'],
});

export const metadata: Metadata = {
  title: 'Password generator app',
  description: 'Password generator app',
  applicationName: 'Password generator app',
} as const;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <meta property="og:image" content={undefined} />
      </head>
      <body
        className={`${jetBrainsMono.variable} mx-auto flex min-h-dvh flex-col justify-center overflow-x-clip bg-gradient-to-b from-[#14131B] to-[#08070B] font-jetBrainsMono md:min-h-screen`}
      >
        <DataProvider>{children}</DataProvider>
      </body>
    </html>
  );
}
