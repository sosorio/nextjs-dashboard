'use client';

import {ChatBubbleLeftIcon,
  PresentationChartLineIcon, DocumentCheckIcon, ArrowUpRightIcon, MapPinIcon, FaceSmileIcon, BookOpenIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';



// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  
   { name: 'Estudio de Nicho de mercado', href: '/nicho', icon: PresentationChartLineIcon },
  {
    name: 'Diagnostico web',
    href: '/diagnostico-web',
    icon: DocumentCheckIcon,
  },
  { name: 'Mejora web', href: '/mejora-web', icon: ArrowUpRightIcon },
  { name: 'Perfiles Google Business', href: '/business', icon: MapPinIcon },
  { name: 'Casos de exito', href: '/casos-de-exito', icon: FaceSmileIcon },
  { name: 'Nuestro libro', href: '/libro', icon: BookOpenIcon }
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
            className={clsx(
              'flex h-[56px] grow items-center justify-center gap-2 rounded-md bg-gray-200 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-grey-500 text-black-900': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}