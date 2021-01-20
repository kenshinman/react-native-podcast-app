import React from 'react';
import {StyleSheet} from 'react-native';
import {UtilityThemeProvider} from 'react-native-design-utility';
import {ApolloProvider} from '@apollo/client';

import {theme} from './src/constants/theme';
import RootNavigation from './src/navigation/RootNavigation';
import {client} from './src/graphql/client';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <UtilityThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <RootNavigation />
      </ApolloProvider>
    </UtilityThemeProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
