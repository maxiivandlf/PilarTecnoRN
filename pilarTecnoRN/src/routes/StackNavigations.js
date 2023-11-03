import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screens } from '../screens';
import Tabs from './Tabs';

const Stack = createNativeStackNavigator();

const StackNavigations = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Tabs' component={Tabs} />
      <Stack.Screen name='Login' component={screens.Login} />
    </Stack.Navigator>
  );
};

export default StackNavigations;
