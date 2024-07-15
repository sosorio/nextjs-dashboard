import Link from 'next/link';
import FormularioTypeform from './ui/dashboard/FormularioTypeform';






export const metadata = {
  title: "Agencia Seo | DSeo.CO",
  description: "Agencia Seo de profesionales para ayudarte a crecer en Google.  Soportamos la estrategia de negocio, generamos resultados."
}

export default async function Page() {



  return (
    <main className='p-0 mt-0'>
      <h1 className='text-2xl bg-blue-900 text-white p-2 text-center mb-5'>Te ayudamos a crecer en Google.</h1>

      

      <div className='flex-row justify-between items-center'>
      <span className='w-100% md:w-1/2'><h1 className='text-2xl mt-10 ml-5'>Pasos a seguir:</h1>
      <ol  className="list-decimal ml-5">
        <li className='text-xl p-2'><Link href="/nicho">Ingresas los datos de tu página en el botón Comenzar Ahora.</Link></li>
        <li className='text-xl p-2'><Link href="/diagnostico-web">Realizamos el estudio de nicho de mercado en Google y el Diagnóstico de tu Web.</Link></li>
        <li className='text-xl p-2'><Link href="/mejora-web">Te presentamos los resultados y una propuesta de tu Plan de mejoramiento web.</Link></li></ol>

      </span>
        <span className='w-100% md:w-1/2'>
      

      
<FormularioTypeform />


      
      
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




<div className="italic mt-5 mb-5"><span>Ver más{'-->'} </span><span className="underline p-2"><Link href="/nicho">Nicho</Link></span><span className="underline p-2"><Link href="/diagnostico-web">Diagnóstico</Link></span><span className="underline p-2"><Link href="/mejora-web">Mejora</Link></span><span className="underline p-2"><Link href="/business">Local</Link></span><span className="underline p-2"><Link href="/casos-de-exito">Casos de éxito</Link></span><span className="underline p-2"><Link href="/libro">Libro</Link></span></div>



    </main>
  );
}
