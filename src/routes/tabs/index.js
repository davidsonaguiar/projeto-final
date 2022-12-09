import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import Stacks from '../stacks'
import Academy from '../../screens/academy'
import Images from '../../screens/images'

const Tab = createBottomTabNavigator()

export default () => {
    return (
        <Tab.Navigator initialRouteName='Home'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size}) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused? 'ios-home' : 'ios-home-outline'
                    } else if (route.name === 'Academy') {
                        iconName = focused? 'library' : 'library-outline'
                    } else {
                        iconName = focused? 'ios-images' : 'ios-images-outline'
                    }
                    return <Ionicons name={iconName} size={size} color={color}/>
                },
                headerTitleStyle: {color: '#FFF', fontWeight: 'bold', fontSize: 24 },
                headerStyle: { backgroundColor: '#4576FF'},
                tabBarStyle: { backgroundColor: '#4576FF'},
                tabBarActiveTintColor: '#FFF',
                tabBarInactiveTintColor: '#ddd',
                tabBarShowLabel: false,
            })}>
            <Tab.Screen name='Home' component={Stacks} 
                options={{headerShown: false}}/>
            <Tab.Screen name='Academy' component={Academy} />
            <Tab.Screen name='Images' component={Images} />
        </Tab.Navigator>
    )
}