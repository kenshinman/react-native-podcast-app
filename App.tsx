import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {UtilityThemeProvider} from 'react-native-design-utility';
import {ApolloProvider} from '@apollo/client';
import TrackPlayer from 'react-native-track-player';

import {theme} from './src/constants/theme';
import RootNavigation from './src/navigation/RootNavigation';
import {client} from './src/graphql/client';
import trackPlayerServices from './src/services/TrackPlayerServices';

declare const global: {HermesInternal: null | {}};

const track = {
  id: '1',
  url: 'https://traffic.libsyn.com/secure/joeroganexp/p1571.mp3?dest-id=19997',
  title: '#1571 - Emily Harrington',
  artist: 'Ben 10',
};

const App = () => {
  useEffect(() => {
    (async () => {
      await TrackPlayer.setupPlayer().then(() => {
        console.log('player is setup');
      });

      await TrackPlayer.registerPlaybackService(() => trackPlayerServices);
      await TrackPlayer.add([track]);
      await TrackPlayer.play();

      setTimeout(() => {
        TrackPlayer.stop();
      }, 3000);
    })();
  }, []);

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
