import Link from "next/link"

export const metadata = {
    title: "Nicho: Benchmarking competidores. | Dseo.CO",
    description: "Estadisticas de trafico de competidores, tiempo en el sitio, navegación.  Análisis de fortalezas y debilidades."
}
export default function NichosPage() {
    return <><h1 className="text-3xl p-10">Benchmarking competidores.</h1>
    <p className="p-4">Utilizando herramientas expertas obtenemos información fundamental de la competencia para poder analizar basados en datos:</p>
    <ol className="	list-decimal">
        <li className="p-4"><strong>Trafico web:</strong>Visitantes mensuales.</li>
        <li className="p-4"><strong>Uso del sitio:</strong> Tiempo en el sitio y uso del sitio. </li>
        <li className="p-4"><strong>Fuentes de tráfico:</strong>tipo de fuente de tráfico. </li>
        <li className="p-4"><strong>Autoridad de dominio:</strong>Valor relacionado con los links externos que tiene una página y que representa su reputación en Internet.</li>
    </ol>
    <div className="italic"><span className="underline"><Link href="/nicho">Nicho. </Link></span><span>{'<--'}Volver a Nicho</span></div>
    <div className="italic"><span> {'-->'}</span><span className="underline"><Link href="/nicho/contexto-de-ubicacion">Contexto de ubicación.</Link></span> <span className="underline"><Link href="/nicho/tamano-del-mercado">Tamaño del mercado.</Link></span></div>
 
    </>    

}