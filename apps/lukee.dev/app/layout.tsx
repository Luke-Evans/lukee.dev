import { Metadata } from 'next/types';
import { Unbounded } from 'next/font/google';
import './global.css';

export const runtime = 'edge';

const unbounded = Unbounded({
  subsets: ['latin'],
  weight: ['400', '900'],
  display: 'swap',
  preload: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={unbounded.className}>
      <body>{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'lukee.dev',
  description: 'Luke Evans personal website and project',
  applicationName: 'lukee.dev',
  authors: [{ name: 'Luke Evans', url: 'https://github.com/Luke-Evans' }],
  keywords: [
    'Luke Evans',
    'Blog',
    'Website',
    'Project',
    'Portfolio',
    'Edge',
    'Next.js',
    'React',
  ],
  creator: 'Luke Evans',
  publisher: 'Luke Evans',
  colorScheme: 'dark',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
    date: false,
    url: false,
  },
};
