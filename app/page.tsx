import Link from 'next/link';
import SolicitarAsesoria from './ui/SolicitarAsesoria';







export const metadata = {
  title: "Agencia Seo | DSeo.CO",
  description: "Agencia Seo de profesionales para ayudarte a crecer en Google.  Soportamos la estrategia de negocio, generamos resultados."
}

export default async function Page() {



  return (
    <main className='p-0 mt-0'>
      <div className='hidden md:block text-2xl bg-blue-900 text-white p-1 text-center mb-5'>Te ayudamos a crecer en Google.</div>

<h1 className='md:hidden text-2xl text-center'>Te Ayudamos a Crecer en Google.</h1>
      

      <div className='flex-row justify-between items-center'>
      <span className='w-100% md:w-1/2'><h2 className='text-2xl mt-10 ml-5'>Nuestro método:</h2>
      <ol  className="list-decimal ml-5">

        <li className='text-xl p-2'><Link href="/nicho">Realizamos el estudio de nicho de mercado en Google.</Link></li>
        <li className='text-xl p-2'><Link href="/diagnostico-web">Realizamos un diagnóstico de tu página web.</Link></li>
        <li className='text-xl p-2'><Link href="/mejora-web">Te presentamos los resultados y una propuesta de tu Plan de mejoramiento web.</Link></li></ol>

      </span>
        <span className='w-100% md:w-1/2'>
      

      



      
      
      </span>
      </div>
      <div className='flex-row md:flex justify-start items-center'><p className='mt-5 text-2xl'>Nuestros resultados:</p>
      <ul  className="mt-5 list-none flex-row md:flex">
        <li className='text-xl p-2'>1.5 millones de impresiones mensuales.</li>
        <li className='text-xl p-2'>50k paginas indexadas.</li>
        <li className='text-xl p-2'>50k visitas mensuales.</li>
        <li className='text-xl p-2'>150k ventas generadas.</li>

      </ul>
        </div>


<SolicitarAsesoria/>





    </main>
  );
}
