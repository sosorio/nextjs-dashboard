import SolicitarAsesoria from "../ui/SolicitarAsesoria"

export default function PaginasLayout({children}) {
    return (
        <div>
            
            {children}
            <SolicitarAsesoria/>
        </div>
    )
}