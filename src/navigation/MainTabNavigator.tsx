import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import FeatherIcon from 'react-native-vector-icons/Feather';

import ListenNowScreen from '../screens/listenNow/ListenNowScreen';
import LibraryScreen from '../screens/library/LibraryScreen';
import SearchScreen from '../screens/search/SearchScreen';
import PodcastDetailsScreen from '../screens/podcastDetails/PodcastDetailsScreen';
import {theme} from '../constants/theme';

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
    <SearchStack.Navigator
      screenOptions={{headerTintColor: theme.color.blueLight}}>
      <SearchStack.Screen
        options={{title: 'Search'}}
        name="Search"
        component={SearchScreen}
      />
      <SearchStack.Screen
        options={{headerTitle: ''}}
        name="PodcastDetails"
        component={PodcastDetailsScreen}
      />
    </SearchStack.Navigator>
  );
};

const ICON_SIZE = 24;

const MainTabNavigator = () => {
  return (
    <MainTab.Navigator
      initialRouteName="Search"
      tabBarOptions={{activeTintColor: theme.color.blueLight}}>
      <MainTab.Screen
        name="ListenNow"
        component={ListenNowStackNavigator}
        options={{
          title: 'Listen Now',
          tabBarIcon: ({color}) => (
            <FeatherIcon name="headphones" size={ICON_SIZE} color={color} />
          ),
        }}
      />
      <MainTab.Screen
        name="Library"
        component={LibraryStackNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <FeatherIcon name="inbox" size={ICON_SIZE} color={color} />
          ),
        }}
      />
      <MainTab.Screen
        name="Search"
        component={SearchStackNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <FeatherIcon name="search" size={ICON_SIZE} color={color} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};

export default MainTabNavigator;
