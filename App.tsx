import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Box, UtilityThemeProvider} from 'react-native-design-utility';
import RootNavigation from './src/navigation/RootNavigation';
import HomeScreen from './src/screens/HomeScreen';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <UtilityThemeProvider>
      <RootNavigation />
    </UtilityThemeProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
