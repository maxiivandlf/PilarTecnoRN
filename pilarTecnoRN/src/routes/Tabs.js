import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Icon } from '@rneui/themed';
import { theme } from '../constants/theme';

import Home from '../screens/tabs/Home';
import Maps from '../screens/tabs/Maps';

const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      activeColor={theme.colors.primary}
      inactiveColor={theme.colors.base100}
      barStyle={{ backgroundColor: theme.colors.accent }}
      initialRouteName='Home'
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarLabel: 'Inicio',
          tabBarAccessibilityLabel: 'Inicio',

          tabBarIcon: () => (
            <Icon
              name={'home'}
              type='font-awesome-5'
              size={20}
              color={theme.colors.primary}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Maps'
        component={Maps}
        options={{
          tabBarIcon: () => (
            <Icon
              name={'map'}
              type='font-awesome-5'
              size={20}
              color={theme.colors.primary}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
