import Link from 'next/link';

export default function Servicios() {
    return (
      <><h2 className="text-2xl mt-10 ml-10">Nuestros Servicios de Mejoras de sitio web:</h2>

      <ul className="ml-10 mt-10 mb-10 list-disc">
          <li className="text-xl p-2"><strong>Mejora funcional o de embudo de conversión.</strong> De acuerdo a los objetivos del sitio identificamos oportunidades de mejora.  Usualmente nos apalancamos en herramientas que nos muestran como interactuan los usuarios con el sitios a traves de mapas de calor y grabaciones de sesiones.</li>
          <li className="text-xl p-2"><strong>Mejora de tamaño y estructura del sitio web.</strong> Analizamos como esta constuido el sitio, la cantidad de páginas, como esta categorizado y los niveles de profundidad. Basado en el estudio de álabras clave determinamos los ajustes necesarios.</li>
          <li className="text-xl p-2"><strong>Mejora contenido del sitio web.</strong> Teniendo en cuenta el estudio de palabras claves determinamos la relevancia del contenido y los ajuste necesarios con el enfoque de SEO.</li>
          <li className="text-xl p-2"><strong>Mejora de Core Web Vitals.</strong>  Optimización de imágenes, implementación de CDNs, archivos JS y CSS.</li> 
          <li className="text-xl p-2"><strong> Mejora de autoridad de sitio.</strong>  Estrategia de links externos: basado en competidores fuertes, directorios del sector y directorios locales relevantes, blogs, comentarios en paginas relevantes, redes sociales especializadas, etc.  Excluyendo links con spam score o indice toxicidad.</li>
          <li className="text-xl p-2"><strong> Desarrollo web en Wordpress.</strong> Dominamos la plataforma, durante muchos a;os hemos contruido gran cantidad de sitios.  Podemos ayudarte a crear ecommerce, blogs y otros.  Tambien te ayudamos a hacerlo de manera tecnicamente eficiente, con el hosting y temas correctos para alto rendimiento.  En la imagen se observa el rendimiento de la ultima tienda montada en Woocommerce.</li>
          <li className="text-xl p-2"><strong>Desarrollo web en Wordpress o NextJS.</strong>Conocemos la plataforma de ultima tecnologia NextJs, de hecho esta pagina esta construida en esta herramient y tiene un redimineto de 99%.</li>
          </ul>
      
          <div className="text-center text-sm mb-5"><div className='flex items-center justify-center'><img src='https://storage.googleapis.com/nextjs-firebase-61957.appspot.com/paginas/rendimiento-wordpress-woocommerce.webp' width="500" height="281" alt="rendimiento Wordpress"/></div>Nuestro ultimo trabajo en <strong>Wordpress</strong> tiene un rendimiento del 88%, mientras que la media de las páginas de Wordpress es de un 30%.</div>
      
          <div className="text-center text-sm mb-5"><div className='flex items-center justify-center'><img src='https://storage.googleapis.com/nextjs-firebase-61957.appspot.com/paginas/rendimiento-nextJs.webp' width="500" height="281" alt="rendimiento en NextJs"/></div>Esta página hecha en <strong>NEXTJS</strong> tiene un rendimiento del 99%.</div>
      
      
      
            <div className='flex-row justify-between items-center p-3'>
            <span className='w-100% md:w-1/2'><h2 className='text-2xl mt-10 ml-5'>Nuestro método:</h2>
            <ol  className="list-decimal ml-10">
      
              <li className='text-xl p-2'><Link href="/nicho">Realizamos el estudio de nicho de mercado en Google.</Link></li>
              <li className='text-xl p-2'><Link href="/diagnostico-web">Realizamos un diagnóstico de tu página web.</Link></li>
              <li className='text-xl p-2'><Link href="/mejora-web">Te presentamos los resultados y una propuesta de tu Plan de mejoramiento web.</Link></li></ol>
      
            </span>
              <span className='w-100% md:w-1/2'>
            
      
            
      
      
      
            
            
            </span>
            </div>
      </>
  
    );
  }