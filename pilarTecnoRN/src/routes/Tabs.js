import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Icon } from '@rneui/themed';
import { theme } from '../constants/theme';

import Home from '../screens/tabs/Home';
import { MapsStackScreen } from './MapsStack';
import { ProfileStackScreen } from './ProfileStack';
import { ListsStackScreen } from './ListStack';

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

          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name='home'
              color={focused ? theme.colors.primary : theme.colors.base100}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name='MapStack'
        component={MapsStackScreen}
        options={{
          tabBarLabel: 'Mapas',
          tabBarIcon: ({ focused }) => (
            <Icon
              name={'map'}
              type='font-awesome-5'
              size={20}
              color={focused ? theme.colors.primary : theme.colors.base100}
            />
          ),
        }}
      />
      <Tab.Screen
        name='List'
        component={ListsStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={'file'}
              type='font-awesome-5'
              size={20}
              color={focused ? theme.colors.primary : theme.colors.base100}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Perfil'
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={'user'}
              type='font-awesome-5'
              size={20}
              color={focused ? theme.colors.primary : theme.colors.base100}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
