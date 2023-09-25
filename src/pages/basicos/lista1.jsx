/*
export default function lista(){
    return (
    <div>
        <span>1,</span>
        <span>2,</span>
        <span>3,</span>
        <span>4,</span>
        <span>5,</span>
        <span>6,</span>
        <span>7,</span>
        <span>8,</span>
        <span>9,</span>
        <span>10.</span>
    </div>
    )
}


function gerarLista() {
    const lista = [
        <span>1,</span>,
        <span>2,</span>,
        <span>3,</span>,
        <span>4,</span>,
        <span>5,</span>,
        <span>6,</span>,
        <span>7,</span>,
        <span>8,</span>,
        <span>9,</span>,
        <span>10.</span>,
    ]
    return lista
}

export default function Lista(){
    return (
    <div>
        {gerarLista()}
    </div>
    )
}
*/

function gerarLista(Final) {
    const Lista = []
    for(
        let contador = 1; //contador
        contador <= Final; //condição
        contador++ // NUMERO++ ==== soma +
        ){
        Lista.push(<span>{contador},</span>) //adicionar na lista
    }
    return Lista
}

export default function Lista(){
    return (
    <div>
        {gerarLista(10)}
    </div>
    )
}