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
    <html lang="es">
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
    
    <footer className='text-center mt-5'>DSeo.CO <Link href="/agencia-seo-medellin">Agencia SEO en Medellín</Link>,<Link href="/agencia-seo-bogota"> Bogotá</Link>, <Link href="/agencia-seo-cali">Cali</Link>, <Link href="/agencia-seo-barranquilla">Barranquilla</Link>, <Link href="/agencia-seo-cartagena">Cartagena</Link>, <Link href="/agencia-seo-soacha">Soacha</Link>, <Link href="/agencia-seo-cucuta">Cúcuta</Link>, <Link href="/agencia-seo-soledad-atlantico">Soledad</Link>, <Link href="/agencia-seo-bucaramanga">Bucaramanga</Link>, <Link href="/agencia-seo-bello-antioquia">Bello</Link>, <Link href="/agencia-seo-valledupar">Valledupar</Link>, <Link href="/agencia-seo-villavicencio">Villavicencio</Link>, <Link href="/agencia-seo-santa-marta">Santa Marta</Link>, <Link href="/agencia-seo-ibague">Ibague</Link>, <Link href="/agencia-seo-monteria">Montería</Link>, <Link href="/agencia-seo-pereira">Pereira</Link>, <Link href="/agencia-seo-manizales">Manizales</Link>, <Link href="/agencia-seo-pasto">Pasto</Link>, <Link href="/agencia-seo-neiva">Neiva</Link>, <Link href="/agencia-seo-palmira">Palmira</Link>, <Link href="/agencia-seo-popayan">Popayán</Link>, <Link href="/agencia-seo-buenaventura">Buenaventura</Link>, <Link href="/agencia-seo-armenia">Armenia</Link>, <Link href="/agencia-seo-floridablanca">Floridablanca</Link>, <Link href="/agencia-seo-itagui">Itagui</Link> y <Link href="/agencia-seo-envigado">Envigado</Link>,<Link href="/agencia-seo-colombia"> Colombia</Link></footer>
          </body>
    </html>
  );
}


