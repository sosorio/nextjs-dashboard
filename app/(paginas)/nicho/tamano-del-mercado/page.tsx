import Link from "next/link"

export const metadata = {
    title: "Nicho: Tamaño del mercado según busquedas en Google. | Dseo.CO",
    description: "Investigación de palabras clave y su volumen de búsqueda.  Nos apoyamos en herramientas de Google para conocer las búsquedas."
}
export default function NichosPage() {
    return <><h1 className="text-3xl p-10">Tamaño del mercado según busquedas en Google.</h1>
    <p className="p-4">A través de herramientas como el Planificador de palabras claves, Google Suggest y otras internas que manejamos contruimos unas tablas que son la base de todo el trabajo, ya que nos dan un norte de como buscan los usuarios:</p>
    <ol className="	list-decimal">
        <li className="p-4"><strong>Palabras informativas:</strong>Relacionadas con el negocio pero sin intención comercial, usualmente son glosarios, métodos y historias.  Ayudan a difundir la marca aunque no siempre tienen una relación comn la venta de corto plazo.</li>
        <li className="p-4"><strong>Palabras de producto o tipo de negocio:</strong> son muy competidas y representan un gran porcentaje del mercado. </li>
        <li className="p-4"><strong>Palabras de marca:</strong>usuarios fieles a la marca.  Incluyen formas incorrectas de escribir. </li>
        <li className="p-4"><strong>Palabras de alta conversión:  relacionada muy directamente con la compra del producto o servicio.</strong></li>
    </ol>
    <div className="italic"><span className="underline"><Link href="/nicho">Nicho. </Link></span><span>{'<--'}Volver a Nicho</span></div>
    <div className="italic"><span> {'-->'}</span><span className="underline"><Link href="/nicho/contexto-de-ubicacion">Contexto de ubicación.</Link></span>  <span className="underline"><Link href="/nicho/benchmarking-competidores"> Benchmarking competidores.</Link></span></div>
 
    </>    

}