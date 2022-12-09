import { View, Text } from "react-native"
import styles from "./styles"

export default ({ chave, value }) => {

    return (
        <View style={styles.box}>
            <Text style={styles.key}>{chave}</Text>
            {typeof value !== 'object'? 
                <Text style={styles.value}>{value}</Text>:
                value}
        </View>
    )
}