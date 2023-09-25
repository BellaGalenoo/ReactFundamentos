import Jsx3 from "./jsx3"

export default function jsx4() {
  const subtitulo = "oiii"
    return(
        <div>
            <h1 className="text-2xl text-pink-600" >amabarbigirl</h1>
            <h2 className="text-green-700">{subtitulo}</h2>
            <h4>{3*3}</h4>
            <h5>{Math.max(10,57)}</h5>
            <h1>{isinrange(30, 1, 50)}</h1>
            <Jsx3/>
        </div>
    )
}

function isinrange(valor, min, max){
    if(valor >= min && valor <= max ){
        return "true"
     } else {
        return "false"
     }
}