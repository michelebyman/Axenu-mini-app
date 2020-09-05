import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/home'
import Call from './screens/call'
import Thanks from './screens/thanks'


const Stack = createStackNavigator();

function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Call me" component={Call} />
          <Stack.Screen name="Thank you" component={Thanks} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
