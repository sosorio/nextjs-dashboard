import Link from "next/link";


export const metadata = {
    title: "Agencia Seo Bogotá | DSeo.CO",
    description: "Agencia Seo Bogotá, expertos para ayudarte a crecer en Google.  Soportamos la estrategia de negocio, generamos resultados en el mercado Bogotano."
}


export default function BogotaPage() {
    return (<><h1 className="text-2xl p-5">Agencia Seo Bogotá</h1>

<p className="p-5 text-xl">Durante más de 16 años hemos trabajado en Bogotá en posicionamiento y generación de ventas en línea.  Conocemos el comportamiento del consumidor en Internet.  Podemos atender cualquier empresa en la ciudad.</p>

<p  className="p-5 text-xl">Conocemos la ciudad y sus dinamicas en las diferentes localidades: <Link  href="/agencia-seo-bogota/suba">Suba</Link>, <Link  href="/agencia-seo-bogota/kennedy">Kennedy</Link>, <Link  href="/agencia-seo-bogota/engativa">Engativa</Link>, Ciudad Bolivar, Bosa, <Link  href="/agencia-seo-bogota/usaquen">Usaquen</Link>, Usme, San Cristobal, <Link  href="/agencia-seo-bogota/fontibon">Fontibón</Link>, Rafael Uribe Uribe, <Link  href="/agencia-seo-bogota/puente-aranda">Puente Aranda</Link>, Barrios Unidos, Tunjuelito, <Link  href="/agencia-seo-bogota/chapinero">Chapinero</Link>, Antonio Nariño y Santa Fe.  Lo cual nos permite un mejor análisis del mercado en cada caso.</p>






    </>)
}