import Link from "next/link"
import SolicitarAsesoria from "@/app/ui/SolicitarAsesoria"

export const metadata = {
    title: "Agencia Seo Medellín | DSeo.CO",
    description: "Agencia Seo Medellín, expertos para ayudarte a crecer en Google.  Soportamos la estrategia de negocio, generamos resultados en el mercado paisa."
}


export default function ColombiaPage() {
    return (<><h1 className="text-2xl">Agencia Seo Colombia</h1>

<p className="p-5 text-xl">Somos colombianos.  Hemos viajado por casi toda Colombia.  Durante 16 años hemos desarrollado negocios por Internet en Colombia en 37 ciudades, logramos conocer el comportamiento del consumidor colombiano, además al dominar las herramientas de Internet podemos acertar en las estrategias requeridas en diferentes tipos de negocio.</p>

<p className="p-5 text-xl">Conocemos el país y sus principales ciudades:  Bogotá, Medellín, Cali, Barranquilla, Bucaramanga, Pereira, Manizales, Cartagena, Santa Marta, Armenia, Valledupar, Monteria, entre otras ciudades.</p>
    
<div className="italic mt-5 mb-5"><span>Ver más{'-->'} </span><span className="underline p-2"><Link href="/nicho">Nicho</Link></span><span className="underline p-2"><Link href="/diagnostico-web">Diagnóstico</Link></span><span className="underline p-2"><Link href="/mejora-web">Mejora</Link></span><span className="underline p-2"><Link href="/business">Local</Link></span><span className="underline p-2"><Link href="/casos-de-exito">Casos de éxito</Link></span><span className="underline p-2"><Link href="/libro">Libro</Link></span></div>

<SolicitarAsesoria/>

    </>)
}