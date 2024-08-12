import Link from "next/link"

export const metadata = {
    title: "Estudio de Nicho de Mercado en Google | Dseo.CO",
    description: "Realizamos un estudio de tu marca en Internet:  Áreas de servicio, tamaño del mercado, benchmarking y oportunidades."
}
export default function NichosPage() {
    return <><h1 className="text-3xl p-10">Estudio de Nichos de Mercado en Google</h1>
    <div className="text-xl"><p className="p-4">Realizamos un estudio del mercado en Internet de tu marca, este estudio comprende:</p>
    <ol className="	list-decimal">
        <li className="p-4"><strong><Link href="/nicho/contexto-de-ubicacion">Contexto de ubicación y alcance geográfico</Link>:</strong> Análisis de área geográfica que cubre producto o servicio.  Los tipos son: Atención en punto de venta, entrega a domicilio, envío por correo, servicios a través de Internet.</li>
        <li className="p-4"><strong><Link href="/nicho/tamano-del-mercado">Tamaño del mercado según busquedas en Google:</Link></strong> Investigación de palabras clave y volumen de búsqueda en el área de servicio.  Se desarrolla una metodología de investigación profunda identificando las diferentes formas de buscar de los usuarios.</li>
        <li className="p-4"><strong><Link href="/nicho/benchmarking-competidores">Benchmarking competidores:</Link></strong> utilizando herramientas especializadas obtenemos estadísticas y fuentes de tráfico, tiempo en el sitio, etcétera.  Determinamos sus fortalezas y debilidades. </li>
        <li className="p-4"><strong><Link href="/nicho/oportunidades-de-negocio">Oportunidades de negocio en internet:</Link></strong>  Utilizando la información de los pasos previos obtenemos las oportunidades para la empresa.</li>
    </ol>
    <div className="italic"><span className="underline"><Link href="/">Home. </Link></span><span>{'<--'}Anterior</span></div>
    <div className="italic"><span>Siguiente {'-->'}</span><span className="underline"><Link href="/diagnostico-web">Diagnóstico Web.</Link></span></div>
    </div>
    </>    

}