function acao1() {
    console.log("banana")
}



export default function botao() {
    function acao2() {
        console.log("baringela")
    
    }

    function acao3(e){
        console.log(e)
    }

    return(
        <div>
            <button onClick={acao1}>click</button>
            <button onClick={acao2}>click</button>
            <button onClick={function () {
                console.log("laranja")
            }}>click</button>
             <button onClick={() => console.log("vinagre")}>click</button>
             <button onClick={acao3}>click</button>
        </div>
    )
}