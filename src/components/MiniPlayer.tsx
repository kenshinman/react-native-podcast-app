import React, {FC} from 'react';
import {Image} from 'react-native';
import {Box, Text} from 'react-native-design-utility';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import {theme} from '../constants/theme';

import {usePlayerContext} from '../contexts/PlayerContext';

const MiniPlayer: FC = () => {
  const {
    currentTrack,
    play,
    pause,
    isPlaying,
    isPaused,
    isStopped,
    isEmpty,
  } = usePlayerContext();

  if (!currentTrack || isEmpty) return null;

  return (
    <Box
      h={75}
      bg="white"
      px="sm"
      style={{
        borderTopWidth: 1,
        borderTopColor: theme.color.blueLight,
      }}>
      <Box f={1} dir="row" align="center" justify="between">
        <Box
          h={50}
          w={50}
          radius={10}
          bg="blueLight"
          mr={10}
          style={{overflow: 'hidden'}}>
          <Image
            source={{uri: currentTrack.artwork}}
            style={{flex: 1, borderRadius: 10}}
          />
        </Box>
        <Box f={1}>
          <Text numberOfLines={1}>{currentTrack.title}</Text>
        </Box>
        <Box>
          {isPaused && (
            <TouchableOpacity onPress={() => play(currentTrack!)}>
              <Icon name="play" size={30} />
            </TouchableOpacity>
          )}
          {isPlaying && (
            <TouchableOpacity onPress={pause}>
              <Icon name="pause" size={30} />
            </TouchableOpacity>
          )}
          {isStopped && (
            <TouchableOpacity onPress={pause}>
              <Icon name="square" size={30} />
            </TouchableOpacity>
          )}
          {/* {isStopped && (
            <TouchableOpacity onPress={pause}>
              <Icon name="square" size={30} />
            </TouchableOpacity>
          )} */}
        </Box>
      </Box>
    </Box>
  );
};

export default MiniPlayer;
