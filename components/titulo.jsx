
//meu componente vai receber propriedades
//props ou propriedades são como..
// sla, ve na pratica:

//                      Componente({propriedade1, propriedade2})
export default function Product({ name, price }) {
    return (
        <div>
            <h1>{name}</h1>
            <p>
              R$ {price}
            </p>
        </div>
    )
}
