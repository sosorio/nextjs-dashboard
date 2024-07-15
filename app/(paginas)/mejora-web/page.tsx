import Link from "next/link"

export const metadata = {
    title: "Mejoras de sitio web | DSeo.CO",
    description: "Mejoras: funcional o de embudo de conversión, estructura del sitio web, contenido del sitio web, Core Web Vitals, Optimización de imágenes, archivos JS y CSS, autoridad de sitio."
}

export default function MejoraPage() {
    return (<><h1 className="text-2xl">Mejoras de sitio web:</h1>

<ul className="mt-10 mb-10 list-disc">
    <li className="text-xl p-2">Mejora funcional o de embudo de conversión.</li>
    <li className="text-xl p-2">Mejora estructura del sitio web.</li>
    <li className="text-xl p-2">Mejora contenido del sitio web.</li>
    <li className="text-xl p-2">Mejora de Core Web Vitals.  Optimización de imágenes, archivos JS y CSS.</li> 
    <li className="text-xl p-2">Mejora de autoridad de sitio.  Estrategia de links externos.</li>
    </ul>

    <div className="italic"><span className="underline"><Link href="/diagnostico-web">Diagnóstico Web.</Link></span><span>{'<--'} Anterior</span></div>
    <div className="italic"><span>Siguiente  {'-->'}</span><span className="underline"><Link href="/business">Perfiles de Google Business.</Link></span></div>
        </>)
}