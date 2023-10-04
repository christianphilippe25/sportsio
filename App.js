// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home';
import Games from './src/screens/Games';
import Menu from './src/components/Menu';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Games" component={Games} />
      </Stack.Navigator>
      <Menu></Menu>
    </NavigationContainer>
  );
}

export default App;
