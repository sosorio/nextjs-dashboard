import NuestrosResultados from "../ui/NuestrosResultados"
import SolicitarAsesoria from "../ui/SolicitarAsesoria"
import Servicios from "../ui/Servicios"

export default function PaginasLayout({children}) {
    return (
        <div>
            
            {children}
            <Servicios></Servicios>
            <NuestrosResultados></NuestrosResultados>
            <SolicitarAsesoria/>
        </div>
    )
}