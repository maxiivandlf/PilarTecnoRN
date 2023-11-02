import React from 'react';
import Lists from '../screens/tabs/List';
import ListDetail from '../screens/ListDetails';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ListsStack = createNativeStackNavigator();

export const ListsStackScreen = () => {
  return (
    <ListsStack.Navigator screenOptions={{ headerShown: false }}>
      <ListsStack.Screen name='Lists' component={Lists} />
      <ListsStack.Screen name='ListDetail' component={ListDetail} />
    </ListsStack.Navigator>
  );
};
