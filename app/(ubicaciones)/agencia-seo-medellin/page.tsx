import Link from "next/link"


export const metadata = {
    title: "Agencia Seo Medellín | DSeo.CO",
    description: "Agencia Seo Medellín, expertos para ayudarte a crecer en Google.  Soportamos la estrategia de negocio, generamos resultados en el mercado paisa."
}


export default function MedellinPage() {
    return (<><h1 className="text-2xl">Agencia Seo Medellín</h1>

<p className="p-5 text-xl">Nacimos y crecimos en Medellín.  Conocemos la cultura paisa y sus dinamicas de consumo.  Durante 16 años hemos desarrollado negocios por Internet en Medellín lo cual nos da conocimiento profundo del mercado, además al dominar las herramientas de Internet podemos acertar en las estrategias requeridas en diferentes tipos de negocio.</p>

<p className="p-5 text-xl">Conocemos la ciudad y sus dinamicas en los diferentes barrios:  <Link  href="/agencia-seo-medellin/el-poblado">El Poblado</Link>,  <Link  href="/agencia-seo-medellin/laureles">Laureles</Link>, <Link  href="/agencia-seo-medellin/belen">Belen</Link>, Doce de Octubre, Robledo, Aranjuez, Manrique, Castilla, San Javier, Villa Hermosa, Buenos Aires, Popular, San Antonio de Prado, Santa Cruz, La America, San Cristobal, La Candelaria, Altavista, Santa Elena y Palmitas.</p>
    




    </>)
}