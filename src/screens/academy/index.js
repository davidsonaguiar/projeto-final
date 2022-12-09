import ContainerScroll from "../../components/containerScroll"
import ItemTb from "../../components/ItemTb"

import { Academy } from "../../assets/datas"

export default () => {

    const ListAcademy = Academy.map((el, index) => {
        return (
            <ItemTb 
            key={index}
            chave={el.key}
            color='#d85656'
            value={
                el.value.map((val, index) => (
                <ItemTb 
                    color='#d5d5d5'
                    key={index}
                    chave={val.key} 
                    value={val.value}/>))
            }/>
        )
    })

    return (
        <ContainerScroll bg='#d8565625'>
            {ListAcademy}
        </ContainerScroll>
    )
}