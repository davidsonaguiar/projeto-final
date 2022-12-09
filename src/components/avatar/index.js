import styles from './styles'
import { View, Image, Animated } from 'react-native'
import { useState } from 'react'

export default ({ uri }) => {

    const [ top, settop ] = useState(new Animated.Value(-1000))

    Animated.timing(
        top,
        {
            toValue: 0,
            duration: 2000,
            useNativeDriver: false
        }
    ).start()

    return (
        <Animated.View
            style={{top: top}}>
            <Image style={styles.avatar} source={uri}/>
        </Animated.View>
    )
}