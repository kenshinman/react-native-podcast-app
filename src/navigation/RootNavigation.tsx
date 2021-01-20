import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainTabNavigator from './MainTabNavigator';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Tabs" component={MainTabNavigator} />
    </Stack.Navigator>
  );
};

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default RootNavigation;
