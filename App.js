/**

* Brief : loads First

* Release : Release version (0.0.1)

* Author : Sahibjot Singh

* Written : 08/02/2022

* Last Revision : 09/02/2022

* ------------------------------- ChangeLog -----------------------------*

* [Version] [Date dd/mm/yy] [INITIALS] [TICKET] [Description of work done]

* ------------------------------- Modifications -----------------------------*

* [Version] [Date dd/mm/yy] [INITIALS] [TICKET] [Description of work done]

* ------------------------------- Includes -----------------------------*

* relative/path/to/fle

* ------------------------------- Called From -----------------------------*

* relative/path/to/file

* ------------------------------- Copyright -----------------------------*

* (c) Copyright, WrdHrd Technologies Pvt. Ltd., 2021. All rights Reserved. *

* -----------------------------------------------------------------------------*

*/

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
