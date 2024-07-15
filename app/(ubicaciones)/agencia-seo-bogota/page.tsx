import Link from "next/link";
import SolicitarAsesoria from "@/app/ui/SolicitarAsesoria"

export const metadata = {
    title: "Agencia Seo Bogotá | DSeo.CO",
    description: "Agencia Seo Bogotá, expertos para ayudarte a crecer en Google.  Soportamos la estrategia de negocio, generamos resultados en el mercado Bogotano."
}


export default function BogotaPage() {
    return (<><h1 className="text-2xl p-5">Agencia Seo Bogotá</h1>

<p className="p-5 text-xl">Durante más de 16 años hemos trabajado en Bogotá en posicionamiento y generación de ventas en línea.  Conocemos el comportamiento del consumidor en Internet.  Podemos atender cualquier empresa en la ciudad.</p>

<p  className="p-5 text-xl">Conocemos la ciudad y sus dinamicas en las diferentes localidades: Suba, Kennedy, Engativa, Ciudad Bolivar, Bosa, Usaquen, Usme, San Cristobal, Fontibón, Rafael Uribe Uribe, Puente Aranda, Barrios Unidos, Tunjuelito, Chapinero, Antonio Nariño y Santa Fe.  Lo cual nos permite un mejor análisis del mercado en cada caso.</p>


<div className="italic mt-5 mb-5"><span>Ver más{'-->'} </span><span className="underline p-2"><Link href="/nicho">Nicho</Link></span><span className="underline p-2"><Link href="/diagnostico-web">Diagnóstico</Link></span><span className="underline p-2"><Link href="/mejora-web">Mejora</Link></span><span className="underline p-2"><Link href="/business">Local</Link></span><span className="underline p-2"><Link href="/casos-de-exito">Casos de éxito</Link></span><span className="underline p-2"><Link href="/libro">Libro</Link></span></div>

<SolicitarAsesoria/>


    </>)
}