import Filho from "./Filho"

export default function Pai(props) {
 return (
        <div>
           <Filho nome="Isa "familia={props.familia} />
           <Filho nome="gui" familia={props.familia} />
           <Filho {...props} nome="jana" />
        </div> 
    )
}