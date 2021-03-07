import 'react-native-gesture-handler';
import React from 'react';

import Launch from './pages/Launch';
import Translate from './pages/Translate';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reducer from './redux/reducers/Reducer';

const Stack = createStackNavigator();
//const store = createStore(reducer);

const AppNavigation = () => {
    return (
        //<Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Launch} />
                    <Stack.Screen name="Translate" component={Translate} />
                </Stack.Navigator>
            </NavigationContainer>
        //</Provider>
    )
}

const App = () => {
    return (
        <AppNavigation />
    );
};

export default App;