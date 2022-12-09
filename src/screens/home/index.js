import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import avatar from '../../assets/avatar.png'
import ContainerScroll from '../../components/containerScroll'
import Btn from '../../components/btn'
import Avatar from '../../components/avatar'

export default () => {

    const navigation = useNavigation()
    const navAbout = () => navigation.navigate('About')
    const navHobbies = () => navigation.navigate('Hobbies')

    return (
        <ContainerScroll bg='#4576FF25'>
            <Avatar uri={avatar}/>
            <Text style={styles.Paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Suspendisse quis dapibus ligula. Aliquam sagittis eros ut ante maximus 
                scelerisque. Sed congue imperdiet maximus</Text>
            <View style={styles.btns}>
                <Btn content='Mais' duration={-1500} handleNav={navAbout}/>
                <Btn content='Hobbies' duration={1500} handleNav={navHobbies}/>
            </View>
        </ContainerScroll>
    )
}