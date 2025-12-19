import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Loopwish',
  description: 'Ønsk. Del. Få. Sammen.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className="min-h-screen">
        <div className="mx-auto max-w-3xl p-6">{children}</div>
      </body>
    </html>
  );
}
