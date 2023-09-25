export default function repeticao1() {
    const alunos = [
        "Caio",
        "Fabiana",  //array
        "Caroline",
        "Jhonny",
        "Rique",
        "Richard",
        "Lenna",
    ]

  return (
    <div className="flex flex-col">
        {
            alunos.map((aluno) =>
                <li>
                    {aluno}
                </li>
            )
        }
    </div>
  )

}