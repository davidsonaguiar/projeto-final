import { ScrollView, View } from 'react-native'
import { styles } from './styles'

export default ({ children, bg }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.Container}>{children}</View>
        </ScrollView>
    )
}