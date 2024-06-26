import { lusitana } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased`}>
        <div style={{border: '1px solid #000'}}>
          {children}
          </div>
          <footer className='py-10 flex justify-center items-center'>Hecho con amor por la gente de Vercel. </footer>
          </body>
    </html>
  );
}
