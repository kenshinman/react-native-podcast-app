import React from 'react';
import {StyleSheet} from 'react-native';
import {UtilityThemeProvider} from 'react-native-design-utility';
import {theme} from './src/constants/theme';
import RootNavigation from './src/navigation/RootNavigation';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <UtilityThemeProvider theme={theme}>
      <RootNavigation />
    </UtilityThemeProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
