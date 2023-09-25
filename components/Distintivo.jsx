export default function Distintivo({agente}) {
    return(
        <section className="p-4 flex flex-col rounded-lg bg-gray-700 text-white">
            <p>
               {agente.id} - {agente.nome} - {agente.elemento}
            </p>
        </section>
    )

}
