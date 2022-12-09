import { View, Text, Image } from "react-native"
import { ImgURI } from "../../assets/datas"
import ContainerScroll from "../../components/containerScroll"
import ItemTb from "../../components/ItemTb"
import styles from "./styles"

export default () => {

    const ListImages = ImgURI.map((el, index) => {
        return (
            <ItemTb
            color='#348064'
            key={index}
            chave={el.legenda}
            value={
                <Image style={styles.img} source={{uri: el.uri}} />
            }/>
        )
    })

    return (
        <ContainerScroll bg='#34806425'>
            {ListImages}
        </ContainerScroll>
    )
}