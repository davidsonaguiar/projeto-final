import { View, Text, Image } from "react-native"
import styles from "./styles"

export default ({ chave, value, color, uri }) => {

    return (
        <View style={styles.box}>
            <Text style={{...styles.key , backgroundColor: color}}>{chave}</Text>
            <Text style={styles.value}>{value}</Text>
            <Image style={styles.img} source={{uri: uri}} />
        </View>
    )
}