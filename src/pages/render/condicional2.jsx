import If from "../../../components/If";

export default function condicional1() {
    const numero = 5
    return(
        <div>
               <If teste={numero % 2 === 0}>
                   <h1>o numero {numero} é par</h1> 
               </If>
               <If teste={numero % 2 === 1}>
                   <h1>o numero {numero} é impar</h1> 
               </If>
        </div>
    )
}