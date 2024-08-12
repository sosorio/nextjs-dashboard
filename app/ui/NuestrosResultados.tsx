import Link from 'next/link';

export default function NuestrosResultados() {
    return (
        <div className='flex-row  justify-between items-center w-full'><p className='mt-5 text-2xl'>Nuestros resultados:</p>
        <div className='w-full'><ul  className="bg-zinc-100 mt-5 list-none flex-row md:flex md:justify-between gap-2 mb-5">
          <li className='text-xl p-2 hover:bg-zinc-300 text-center p-2 border-solid border-2 border-black rounded-lg'><Link href="/casos-de-exito"><div className='text-4xl'>1.5M</div><div> impresiones orgánicas/mes.</div></Link></li>
          <li className='text-xl p-2 hover:bg-zinc-300 text-center p-2 border-solid border-2 border-black rounded-lg'><div className='text-4xl'>50k</div><div> páginas indexadas.</div></li>
          <li className='text-xl p-2 hover:bg-zinc-300 text-center p-2 border-solid border-2 border-black rounded-lg'><div className='text-4xl'>50k</div><div> visitas orgánicas/mes.</div></li>
          <li className='text-xl p-2 hover:bg-zinc-300 text-center p-2 border-solid border-2 border-black rounded-lg'><div className='text-4xl'>150k</div><div> ventas generadas.</div></li>
  
        </ul></div>
          </div>
  
    );
  }