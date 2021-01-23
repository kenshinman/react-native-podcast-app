import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {Box, UtilityThemeProvider} from 'react-native-design-utility';
import {ApolloProvider} from '@apollo/client';
import TrackPlayer from 'react-native-track-player';

import {theme} from './src/constants/theme';
import RootNavigation from './src/navigation/RootNavigation';
import {client} from './src/graphql/client';
import trackPlayerServices from './src/services/TrackPlayerServices';
import PlayerContextProvider from './src/contexts/PlayerContext';

declare const global: {HermesInternal: null | {}};

const App = () => {
  const [isReady, setIsReady] = useState<boolean>(false);
  useEffect(() => {
    TrackPlayer.setupPlayer().then(() => {
      TrackPlayer.registerPlaybackService(() => trackPlayerServices);
      setIsReady(true);
    });
  }, []);

  return (
    <UtilityThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        {isReady ? (
          <PlayerContextProvider>
            <RootNavigation />
          </PlayerContextProvider>
        ) : (
          <Box f={1} center>
            <ActivityIndicator size="large" />
          </Box>
        )}
      </ApolloProvider>
    </UtilityThemeProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
