import { Detalhes } from "../../assets/datas"

import ItemTb from "../../components/ItemTb"
import ContainerScroll from "../../components/containerScroll"

export default () => {

    const listDetalhes = Detalhes.map((el, index) => {
        return <ItemTb chave={el.key} value={el.value} key={index}/>
    })

    return (
        <ContainerScroll>
            {listDetalhes}
        </ContainerScroll>
    )
}