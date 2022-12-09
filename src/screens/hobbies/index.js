import { View, Text, Image } from 'react-native'
import { Hobbies } from "../../assets/datas"
import ItemTb from "../../components/ItemTb"
import ContainerScroll from "../../components/containerScroll"
import Hobby from '../../components/hobby'

export default () => {

    const ListHobbies = Hobbies.map((el, index) => {
        return (
        <Hobby 
            color='#4576FF'
            key={index}
            chave={el.key}
            value={el.value}
            uri={el.uri}/>)
    })

    return (
        <ContainerScroll bg='#4576FF25'>
            {ListHobbies}
        </ContainerScroll>
    )
}