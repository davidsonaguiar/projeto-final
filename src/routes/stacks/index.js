import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../../screens/home'
import About from '../../screens/about'
import Hobbies from '../../screens/hobbies'

const Stack = createNativeStackNavigator()

export default () => {
    return (
        <Stack.Navigator initialRouteName='Home'
            screenOptions={{
                headerStyle: {backgroundColor: '#4576FF'},
                headerTitleStyle: {color: '#FFF', fontSize: 24, fontWeight: 'bold'},
            }}>
            <Stack.Screen name='Bem-vindo' component={Home} />
            <Stack.Screen name='About' component={About} options={{title: 'Detalhes'}}/>
            <Stack.Screen name='Hobbies' component={Hobbies}/>
        </Stack.Navigator>
    )
}