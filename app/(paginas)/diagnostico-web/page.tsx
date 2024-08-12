import Link  from "next/link";

export const metadata = {
  title: "Diagnóstico de su sitio web | Dseo.CO",
  description: "Productos Vs Demanda, enfoque página y embudo de conversión, tamaño y estructura del sitio, contenidos, posicionamiento, core web vitals y autoridad del sitio."
}


export default function DiagnosticoPage() {
    return (<><h1 className="text-2xl">Diagnóstico de sitio web:</h1>

  <ul className="mt-10 mb-10 list-disc">
    <li className="text-xl p-2">Análisis de Productos y servicios vs requerimientos del mercado.</li>
    <li className="text-xl p-2">Análisis objetivos del sitio y embudo de conversión.</li>
    <li className="text-xl p-2">Análisis Tamaño y Estructura del sitio Vs Competidores.</li>
    <li className="text-xl p-2">Análisis de contenidos y posicionamiento.</li> 
    <li className="text-xl p-2">Análisis técnico de Core Web Vitals</li>
    <li className="text-xl p-2">Análisis de autoridad del sitio.</li>
    </ul>

    <div className="italic"><span className="underline"><Link href="/nicho">Estudio de Nicho de Mercado.</Link></span><span>{'<--'} Anterior</span></div>
    <div className="italic"><span>Siguiente {'-->'}</span><span className="underline"><Link href="/mejora-web">Plan de mejoramiento web.</Link></span></div>

        </>);
}