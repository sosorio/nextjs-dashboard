import Link from "next/link"

export const metadata = {
    title: "Creación o ajuste de perfiles de Google Business | DSeo.CO",
    description: "Perfiles Google Business: Palabras claves locales. Análisis perfiles de competidores. Optimización de títulos y contenidos"
}


export default function BusinessPage() {
    return (<><h1 className="text-2xl">Creación u optimización de perfiles de Google Business</h1>

<ul className="mt-10 mb-10 list-disc">
    <li className="text-xl p-2">Investigación de palabras claves locales.</li>
    <li className="text-xl p-2">Análisis perfiles de competidores por área.</li>
    <li className="text-xl p-2">Oferta Vs áreas y palabras claves.</li>
    <li className="text-xl p-2">Optimización de títulos y contenidos.</li> 

    </ul>

    <div className="italic"><span className="underline"><Link href="/mejora-web">Plan de mejoramiento web.</Link></span><span>{'<--'} Anterior</span></div>
    <div className="italic"><span>Siguiente {'-->'}</span><span className="underline"><Link href="/casos-de-exito">Casos de éxito.</Link></span></div>

    </>)
}