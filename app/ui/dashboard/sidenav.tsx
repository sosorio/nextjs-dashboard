import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';


export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-15 items-end justify-start rounded-md bg-black p-4 md:h-15"
        href="/"
      >
        <div className="w-80 text-white md:w-60">
          <AcmeLogo />
        </div>
        
      </Link>
      <div className="mt-5 flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
      
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>

      </div>
    </div>
  );
}
