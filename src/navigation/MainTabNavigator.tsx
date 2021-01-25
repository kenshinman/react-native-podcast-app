import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import FeatherIcon from 'react-native-vector-icons/Feather';

import ListenNowScreen from '../screens/listenNow/ListenNowScreen';
import LibraryScreen from '../screens/library/LibraryScreen';
import SearchScreen from '../screens/search/SearchScreen';
import PodcastDetailsScreen from '../screens/podcastDetails/PodcastDetailsScreen';
import {theme} from '../constants/theme';
import MiniPlayer from '../components/MiniPlayer';
import PodcastDetailsHeader from '../screens/podcastDetails/PodcastDetailsHeader';
import EpisodeDetailScreen from '../screens/podcastDetails/EpisodeDetailScreen';

const MainTab = createBottomTabNavigator();
const ListenNowStack = createStackNavigator();
const LibraryStack = createStackNavigator();
const SearchStack = createStackNavigator();
const PodcastStack = createStackNavigator();

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

// const PodcastStackNavigator = () => {
//   return (
//     <PodcastStack.Navigator
//       headerMode="none"
//       screenOptions={{
//         title: '',
//       }}>
//       <PodcastStack.Screen
//         name="PodcastDetails"
//         component={PodcastDetailsScreen}
//       />
//       <PodcastStack.Screen
//         name="EpisodeDetails"
//         component={EpisodeDetailScreen}
//       />
//     </PodcastStack.Navigator>
//   );
// };

const SearchStackNavigator = () => {
  return (
    <SearchStack.Navigator
      screenOptions={{
        headerTintColor: theme.color.blueLight,
        headerTitleStyle: {
          color: theme.color.blueLight,
        },
        headerBackTitle: 'Back',
      }}>
      <SearchStack.Screen name="Search" component={SearchScreen} />
      {/* <SearchStack.Screen
        name="PodcastDetails"
        options={{title: '', headerBackTitle: 'Back'}}
        component={PodcastStackNavigator}
      /> */}
      <SearchStack.Screen
        name="PodcastDetails"
        component={PodcastDetailsScreen}
        options={{title: ''}}
      />
      <SearchStack.Screen
        name="EpisodeDetails"
        component={EpisodeDetailScreen}
        options={{title: ''}}
      />
    </SearchStack.Navigator>
  );
};

const ICON_SIZE = 24;

const MainTabNavigator = () => {
  return (
    <MainTab.Navigator
      tabBar={(tabProps) => {
        return (
          <>
            <MiniPlayer />
            <BottomTabBar {...tabProps} />
          </>
        );
      }}
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
