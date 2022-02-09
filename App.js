import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import Scn_Chat from './src/screens/Scn_Chat';
import Scn_Room from './src/screens/Scn_Room';

const Stack = createNativeStackNavigator();

const app = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Select a Room" component={Scn_Room} />
        <Stack.Screen name="Chat Screen" component={Scn_Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default app;
