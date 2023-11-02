import React from 'react';
import Profile from '../screens/tabs/Profile';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const ProfileStack = createNativeStackNavigator();

export const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name='Profile' component={Profile} />
    </ProfileStack.Navigator>
  );
};
