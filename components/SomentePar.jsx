export default function SomentePar(props) {
    // const numeroPar = props.numero % 2 === 0
    // return numeroPar ? <div>{props.numero}</div> : null


    if(props.numero % 2 === 0){
        return <div>{props.numero}</div>
    }
    else {
        return null
    }
    
}