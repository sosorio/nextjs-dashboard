import Link from "next/link"

export const metadata = {
    title: "Casos de exito actuales | Dseo.CO",
    description: "Casos de éxito en Dseo.CO."
}


export default function CasosPage() {
    return (<>
    <h1 className="text-2xl">Casos de éxito actuales.</h1>

<ul className="mt-10 mb-10 list-disc">
    <li className="text-xl p-2"><strong>Industria de flores en Colombia:</strong>  500 mil impresiones mensuales, 150 mil ventas totales en varios años.  Diseño, desarrollo web, desarrollo de productos y proveedores.  Actualmente en implementación de nueva plataforma tecnológica.</li>
    <li className="text-xl p-2"><strong>Banco en Colombia:</strong>  1 millón de  impresiones mensuales, 50 mil visitas mes.  Arreglo de problema de indexación y etiquetado.  Ajuste de diseño a la web para mejora de experiencia de usuario.  Actualmente en proyecto de Google news, optimización de páginas, mejora canal de YouTube.</li>
    <li className="text-xl p-2"><strong>Empresa de consultoría en levantar capital para negocios:</strong>  Se desarrollo el estudio de Nicho y se identifico una gran oportunidad en la venta en línea de consultoría para valoración de empresas.</li>
    <li className="text-xl p-2"><strong>Empresa de Insumos Odontológicos:</strong>  Se creo una tienda en línea con la plataforma Woocommerce, la tienda se hizo con una alta optimización técnica y desde la primer semana comenzo a aparecer en busquedas en Google e inicio un camino de crecimiento en un sector muy competido.</li>
    <li className="text-xl p-2"><strong>Escuela de futbol en Medellín:</strong>  15 mil vistas de perfiles mensuales.  Rankeado de primero en búsquedas de las palabras más importantes relacionadas con el servicio prestado. Ajuste y creación de perfiles de Google Business.</li>
 

    </ul>

    <div className="italic"><span className="underline"><Link href="/business">Perfiles de Google Business.</Link></span><span>{'<--'} Anterior</span></div>
    <div className="italic"><span>Siguiente {'-->'}</span><span className="underline"><Link href="/libro">Nuestro libro.</Link></span></div>
    </>)
}