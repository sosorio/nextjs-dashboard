import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';


export default function SideNav() {
  return (
    <div className="flex h-full flex-col p-0 md:px-1">
      <Link
        className="mb-0 flex h-15 items-end justify-start bg-black p-0 md:h-15"
        href="/"
      >
        <div className="w-full text-white md:w-60 content-center">
          <AcmeLogo />
        </div>
        
      </Link>
      <div className="hidden md:block mt-0 pb-0 mb-0 flex flex-row justify-between bg-gray-800 md:flex-col md:space-x-0 md:space-y-2 rounded-md">
      
        <NavLinks />
        
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>

      </div>
    </div>
  );
}
