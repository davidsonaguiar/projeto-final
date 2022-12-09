import { useState } from 'react'
import { Animated, TouchableOpacity, Text } from 'react-native'
import styles from './styles'

export default ({ content, duration, handleNav }) =>{

    const [ left, setLeft ] = useState(new Animated.Value(duration))

    Animated.timing(
        left,
        {
            toValue: 0,
            duration: 2000,
            useNativeDriver: false
        }
    ).start()

    return (
        <Animated.View
            style={{left: left}}>
            <TouchableOpacity 
                style={styles.btn}
                onPress={handleNav}>
                <Text style={styles.Content}>{content}</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}