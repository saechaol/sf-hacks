import 'react-native-gesture-handler';
import React from 'react';

import Launch from './pages/Launch';
import Translate from './pages/Translate';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Launch} />
                <Stack.Screen name="Translate" component={Translate} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const App = () => {
    return (
        <AppNavigation />
    );
};

export default App;