import Link from "next/link"

export const metadata = {
    title: "Nicho: Contexto de ubicación y alcance geográfico | Dseo.CO",
    description: "Análisis de área geográfica que cubre producto o servicio. Tipos: Atención presencial, entrega a domicilio, envío por correo, servicios online."
}
export default function NichosPage() {
    return <><h1 className="text-3xl p-10">Contexto de ubicación y alcance geográfico</h1>
    <p className="p-4">Google conoce la ubicación de los móviles y por lo tanto de las cuentas de los usuarios.  Usa esta información para optimizar sus resultados de busqueda.  Es por esto que la ubicación y el alcance es parte del SEO.  Clasificamos los tipos de ubicación de acuerdo al alcance geografico para entregar el producto o servicio, así:</p>
    <ol className="	list-decimal">
        <li className="p-4"><strong>Entrega presencial:</strong> Usualmente Google muestra en las primeras posiciones el mapa, por lo tanto en este caso lo más importante es la creación y optimización del perfil de Google Business.  Para este caso nuestra metodología es trabajar en Relevancia, Confiabilidad y Distancia.</li>
        <li className="p-4"><strong>Entrega a domicilio:</strong> Para este caso Google continua mostrando el mapa pero en un contexto más amplio que en la opción anterior.   Hacemos un trabajo en dos dimensiones:  creación y optimización de perfil de Google Business y creación u optimización de página de servicio local.</li>
        <li className="p-4"><strong>Envío por correo:</strong> usualmente los productos que se pueden enviar por empresas de mensajería tienen una alcance nacional.  Por lo tanto, las páginas compiten con otros oferentes de otras ciudades.  Entonces aumenta el reto de optimización.  En este tipo de nicho es de gran valor la oferta en sí, característacas del producto o servicio y como estos responden a las necesidades de los usuarios.</li>
        <li className="p-4"><strong>Servicios a través de Internet:</strong>  En este caso es hay dos tipos:  servicios solo para el país, como por ejemplo software contable en línea e internacionales como cursos en línea, software en línea etc.</li>
    </ol>
    <div className="italic"><span className="underline"><Link href="/nicho">Nicho. </Link></span><span>{'<--'}Volver a Nicho</span></div>
    <div className="italic"><span>Siguiente {'-->'}</span><span className="underline"><Link href="/nicho/tamano-del-mercado">Tamaño del mercado.</Link></span></div>
 
    </>    

}