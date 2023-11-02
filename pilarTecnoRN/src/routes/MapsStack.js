import React from 'react';
import Maps from '../screens/tabs/Maps';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MapsStack = createNativeStackNavigator();

export const MapsStackScreen = () => {
  return (
    <MapsStack.Navigator screenOptions={{ headerShown: false }}>
      <MapsStack.Screen name='Maps' component={Maps} />
    </MapsStack.Navigator>
  );
};
