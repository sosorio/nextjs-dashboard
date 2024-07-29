import Link from "next/link"

export const metadata = {
    title: "Nicho: Oportunidades de negocio en Internet | Dseo.CO",
    description: "Basados en toda la información construida se concluyen las oportunidades de negocio en Google para la empresa."
}
export default function NichosPage() {
    return <><h1 className="text-3xl p-10">Oportunidades de negocio en Google.</h1>
    <p className="p-4">Al analizar toda la información podemos concluir los productos y servicios que están siendo comercializados a través de Internet y también una idea del tamaño de estos negocios.  En este apartado encontraras:</p>
    <ol className="	list-decimal">
        <li className="p-4"><strong>Palabras claves más importantes:</strong> De acuerdo al volumen y tipo de palabra.</li>
        <li className="p-4"><strong>Principales competidores:</strong> Fortalezas y debilidades de cada uno.</li>
        <li className="p-4"><strong>Fortalezas requeridas a desarrollar:</strong> Retos de la empresa para entrar a competir.</li>
        <li className="p-4"><strong>Tipo de  contenido a desarrollar:</strong>  Para el blog y el embudo de conversion.</li>
        <li className="p-4"><strong>Tipo de plataforma a usar:</strong>  Administrador de contenidos o desarrollo propio.</li>
    </ol>
    <div className="italic"><span className="underline"><Link href="/nicho">Nicho. </Link></span><span>{'<--'}Volver a Nicho</span></div>
    <div className="italic"><span>Siguiente {'-->'}</span><span className="underline"><Link href="/nicho/contexto-de-ubicacion">Contexto de ubicación.</Link></span>  <span className="underline"><Link href="/nicho/tamano-del-mercado">Tamaño del mercado.</Link></span></div>
 
    </>    

}