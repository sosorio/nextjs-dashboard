import { roboto } from './ui/fonts';
import './ui/global.css';
import SideNav from "./ui/dashboard/sidenav";
import Link from 'next/link';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link
  rel="icon"
  href="/favicon-16x16.png"
  type="image/png"
  sizes="16x16"
/>
<link
  rel="icon"
  href="/favicon-32x32.png"
  type="image/png"
  sizes="32x32"
/>
      </head>
      <body className={`${roboto.className} antialiased`}>
        
          <div className="flex h-auto flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-6">{children}</div>
    </div>
    
    <footer className='text-center mt-5'>DSeo.CO <Link href="/agencia-seo-medellin">Agencia SEO en Medellín</Link> y <Link href="/agencia-seo-bogota">Bogotá</Link>, <Link href="/agencia-seo-colombia">Colombia.</Link></footer>
          </body>
    </html>
  );
}


