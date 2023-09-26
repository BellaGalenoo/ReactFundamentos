import Distintivo from "../../../components/Distintivo"

export default function AprendendoMap() {
  const elementos = [
    'Morte',
    'Sangue',
    'Medo',
    'Energia',
    'Conhecimento',
  ]
  const agentes = [
    { id: 1, nome: "Kaiser" },
    { id: 2, nome: "Agatha" },
    { id: 3, nome: "Arthur" },
    { id: 4, nome: "Dante" },
    { id: 5, nome: "Rubens" },
    { id: 6, nome: "Carina" },
    { id: 7, nome: "Jhonny" },
    { id: 8, nome: "Paulo" },
    { id: 9, nome: "Verissimo" },
    { id: 10, nome: "Aika" },
  ]

  console.log({ agentes })

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-bold">
        Agente UNICO
      </h1>
      <Distintivo agente={agentes[0]}/>

      
      <h1 className="text-2xl font-bold">
        Agentes
      </h1>
      {agentes.map((agente) => {
        // para cada "agente", renderize:
        return <Distintivo agente={agente}/> //[0]
      })}
      <br/>
      <h1 className="text-2xl font-bold">
        Elementos
      </h1>
      {elementos.map((elemento) => {
        return <p>{elemento}</p>
      })}
    </div>
  )

}