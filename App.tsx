import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {Box, UtilityThemeProvider} from 'react-native-design-utility';
import {ApolloProvider} from '@apollo/client';
import TrackPlayer from 'react-native-track-player';

import {theme} from './src/constants/theme';
import RootNavigation from './src/navigation/RootNavigation';
import {client} from './src/graphql/client';
import PlayerContextProvider from './src/contexts/PlayerContext';

declare const global: {HermesInternal: null | {}};

const App = () => {
  const [isReady, setIsReady] = useState<boolean>(false);
  useEffect(() => {
    TrackPlayer.setupPlayer().then(() => {
      // TrackPlayer.registerPlaybackService(() => trackPlayerServices);
      setIsReady(true);
      TrackPlayer.updateOptions({
        stopWithApp: true,
        // dismissable: true,
        capabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
          TrackPlayer.CAPABILITY_STOP,
          TrackPlayer.CAPABILITY_JUMP_FORWARD,
          TrackPlayer.CAPABILITY_JUMP_BACKWARD,
        ],
        notificationCapabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
          TrackPlayer.CAPABILITY_STOP,
          TrackPlayer.CAPABILITY_JUMP_FORWARD,
          TrackPlayer.CAPABILITY_JUMP_BACKWARD,
        ],
        compactCapabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
          TrackPlayer.CAPABILITY_STOP,
        ],
        jumpInterval: 10,
      });
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
