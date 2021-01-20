import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import ListenNowScreen from '../screens/listenNow/ListenNowScreen';
import LibraryScreen from '../screens/library/LibraryScreen';
import SearchScreen from '../screens/search/SearchScreen';

const MainTab = createBottomTabNavigator();
const ListenNowStack = createStackNavigator();
const LibraryStack = createStackNavigator();
const SearchStack = createStackNavigator();

const ListenNowStackNavigator = () => {
  return (
    <ListenNowStack.Navigator>
      <ListenNowStack.Screen
        options={{title: 'Listen Now'}}
        name="ListenNow"
        component={ListenNowScreen}
      />
    </ListenNowStack.Navigator>
  );
};

const LibraryStackNavigator = () => {
  return (
    <LibraryStack.Navigator>
      <LibraryStack.Screen
        options={{title: 'Library'}}
        name="Library"
        component={LibraryScreen}
      />
    </LibraryStack.Navigator>
  );
};

const SearchStackNavigator = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        options={{title: 'Search'}}
        name="Search"
        component={SearchScreen}
      />
    </SearchStack.Navigator>
  );
};

const MainTabNavigator = () => {
  return (
    <MainTab.Navigator initialRouteName="Search">
      <MainTab.Screen
        name="ListenNow"
        component={ListenNowStackNavigator}
        options={{title: 'Listen Now'}}
      />
      <MainTab.Screen name="Library" component={LibraryStackNavigator} />
      <MainTab.Screen name="Search" component={SearchStackNavigator} />
    </MainTab.Navigator>
  );
};

export default MainTabNavigator;
