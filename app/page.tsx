import Link from 'next/link';
import SolicitarAsesoria from './ui/SolicitarAsesoria';
import NuestrosResultados from './ui/NuestrosResultados';







export const metadata = {
  title: "Agencia Seo | Dseo.CO",
  description: "Agencia Seo de profesionales para ayudarte a crecer en Google.  Soportamos la estrategia de negocio, generamos resultados."
}

export default async function Page() {



  return (
    <main className='p-0 mt-0'>
      

<h1 className='mt-5 text-2xl text-center'>Te Ayudamos a Crecer en Google.</h1>

<div className="mt-5 flex justify-center border-none"><img src='https://storage.googleapis.com/nextjs-firebase-61957.appspot.com/paginas/ayudar-a-crecer-2.webp' width="500" height="281" alt="Seo en Medellin"/></div>
      
<h2 className="text-center text-2xl mt-10 ml-10">Nuestros Servicios de Mejoras de sitio web:</h2>

<div className="mt-5 flex justify-center border-none"><img src='https://storage.googleapis.com/nextjs-firebase-61957.appspot.com/paginas/iconos-integrados.webp' width="360" height="126" alt="proceso"/></div>



<p className='mt-5 ml-5 mb-5 text-xl'>Desarrollamos un proyecto a la medida de las necesidades de cada caso.  Para ideas o proyectos en etapa inicial nos concentramos en el estudio de nicho.  Para proyectos más desarrollados en optimizaciones que generan crecimiento de visitas y ventas.  Los tipos de mejoras que realizamos son:</p>



<ul className="ml-10 mt-10 mb-10 list-disc">
    <li className='text-xl p-2'><Link href="/nicho"><strong>Realizamos el ESTUDIO DE NICHO de mercado en Google.</strong></Link>  Este contiene: Contexto de ubicación y alcance geográfico, Tamaño del mercado según busquedas en Google, Benchmarking competidores y Oportunidades de negocio en internet.</li>
    <li className='text-xl p-2'><Link href="/diagnostico-web"><strong>Realizamos un DIAGNOSTICO de tu página web.</strong></Link>Este contiene: Análisis de Productos y servicios vs requerimientos del mercado. Análisis objetivos del sitio y embudo de conversión. Análisis Tamaño y Estructura del sitio Vs Competidores. Análisis de contenidos y posicionamiento. Análisis técnico de Core Web Vitals. Análisis de autoridad del sitio.</li>
    <li className="text-xl p-2"><strong> CREACIÓN: Desarrollo web en Wordpress - Woocommerce.</strong> Dominamos la plataforma, durante muchos años hemos construido gran cantidad de sitios.  Podemos ayudarte a crear ecommerce, blogs y otros.  Tambien te ayudamos a hacerlo de manera tecnicámente eficiente, con el hosting, temas y plugins correctos para alto rendimiento.  En la imagen se observa el rendimiento de la ultima tienda montada en Woocommerce.     <div className="text-center text-sm mb-5"><div className='flex items-center justify-center'><img src='https://storage.googleapis.com/nextjs-firebase-61957.appspot.com/paginas/rendimiento-wordpress-woocommerce.webp' width="500" height="281" alt="rendimiento Wordpress"/></div>Nuestro ultimo trabajo en <strong>Wordpress</strong> tiene un rendimiento del 88%, mientras que la media de las páginas de Wordpress es de un 30%.</div></li>
    <li className="text-xl p-2"><strong>CREACIÓN: Desarrollo web en NextJS.</strong>Conocemos la plataforma de última tecnologia NextJs, de hecho esta pagina esta construida en esta herramienta y tiene un redimiento del 99%.    <div className="text-center text-sm mb-5"><div className='flex items-center justify-center'><img src='https://storage.googleapis.com/nextjs-firebase-61957.appspot.com/paginas/rendimiento-nextJs.webp' width="500" height="281" alt="rendimiento en NextJs"/></div>Esta página hecha en <strong>NEXTJS</strong> tiene un rendimiento del 99%.</div></li>

    <li className="text-xl p-2"><strong>OPTIMIZACIÓN Y CRECIMIENTO: Mejora funcional o de embudo de conversión.</strong> De acuerdo a los objetivos del sitio, identificamos oportunidades de mejora.  Usualmente nos apalancamos en herramientas que nos muestran como interactuan los usuarios con el sitio a través de mapas de calor y grabaciones de sesiones.  En las páginas de venta nos basamos en los siguientes principios: diseño de proceso lógico del usuario, elementos determinantes en la decisión del usuario, visibilidad, contraste, claridad del mensaje, rápidez de carga y simplicidad.  Además analizamos las etapas previas del usuario de aprendizaje inicial, educación en criterios y comparación que son previos a las paginas de venta.</li>

    <li className="text-xl p-2"><strong>OPTIMIZACIÓN Y CRECIMIENTO: Mejora de cantidad de URLs y estructura del sitio web.</strong> Analizamos como esta construido el sitio, la cantidad de páginas, como esta categorizado y los niveles de profundidad. Basado en el estudio de pálabras clave determinamos los ajustes necesarios.  Y además un plan de generación de nuevas urls con enfoque SEO.</li>
    <li className="text-xl p-2"><strong>OPTIMIZACIÓN Y CRECIMIENTO: Mejora contenido del sitio web.</strong> Teniendo en cuenta el estudio de palabras claves determinamos la relevancia del contenido y los ajustes necesarios con el enfoque de SEO.  También otros aspectos como el volumen de texto, orden del texto, uso de imagenes, videos u otros recursos de acuerdo a la intención del usuario en la palabra clave objetivo.</li>
    <li className="text-xl p-2"><strong>OPTIMIZACIÓN Y CRECIMIENTO: Mejora de Core Web Vitals.</strong>  Los core web vitals son un conjunto de tres métricas de rendimiento web. Si deseas conocer los de tu web pueden obtenerse en la página de Google: https://pagespeed.web.dev/ Usualmente estos valores no son competitivos en las web, en especial cuando el sitio fue construido con con administrados de contenido como Wordpress o software de tiendas en línea y tienen gran cantidad de plugins agregados.  Nosotros podemos ayudarte a subir estos indicadores a través de: Optimización de imágenes, implementación de CDNs, optimización de archivos JS y CSS.</li> 
    <li className="text-xl p-2"><strong>OPTIMIZACIÓN Y CRECIMIENTO: Mejora de autoridad de sitio.</strong>  La autoridad de un sitio web es un concepto de SEO que hace referencia a la “fuerza” de un dominio determinado.  Se construye a través de los links que otras páginas hacen a tu página. Estrategia de links externos: basado en competidores fuertes, directorios del sector y directorios locales relevantes, blogs, comentarios en paginas relevantes, redes sociales especializadas, etc.  Excluyendo links con spam score alto o indice toxicidad.</li>
        </ul>








        
<NuestrosResultados></NuestrosResultados>



<SolicitarAsesoria/>





    </main>
  );
}
