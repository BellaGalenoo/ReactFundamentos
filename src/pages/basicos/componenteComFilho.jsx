import Item from "../../../components/Item";
import Lista from "../../../components/lista";

export default function ComponenteComFilho() {
    return (
        <Lista galeno={
            <>
                <Item conteudo="item1" />
                <Item conteudo="item2" />
                <Item conteudo="item3" />
            </>
        } />
    )
}