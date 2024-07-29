'use client';

import {
  PresentationChartLineIcon, DocumentCheckIcon, ArrowUpRightIcon, MapPinIcon, FaceSmileIcon, BookOpenIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';




// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  
   { name: 'Estudio Nicho de Mercado', shortName:'Estudio Nicho', href: '/nicho', icon: PresentationChartLineIcon },
  {
    name: 'Diagnostico web', shortName:'Diagnóstico Web',
    href: '/diagnostico-web',
    icon: DocumentCheckIcon,
  },
  { name: 'Mejora web', shortName:'Mejora Web', href: '/mejora-web', icon: ArrowUpRightIcon },
  
  { name: 'Casos de exito', shortName:'Casos', href: '/casos-de-exito', icon: FaceSmileIcon },

];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex h-[56px] grow items-center justify-center gap-2 rounded-md bg-blue-950 text-white p-1 text-md font-medium hover:bg-sky-700 md:flex-none md:justify-start md:p-2 md:px-3 ${pathname === link.href ? 'bg-gray-950' : ''}`}
          >
            <LinkIcon className="hidden md:block w-6" />
            <p className="hidden  md:block">{link.name}</p>
            <div className="md:hidden text-sm text-center">{link.shortName}</div>
          </Link>
        );
      })}
    </>
  );
}