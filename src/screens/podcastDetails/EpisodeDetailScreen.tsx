import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, Linking} from 'react-native';
import {Box, Text} from 'react-native-design-utility';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import {theme} from '../../constants/theme';
import {usePlayerContext} from '../../contexts/PlayerContext';
import {humanDuration} from '../../lib/dateTimeHelper';
import {FeedQuery_feed, SearchQuery_search} from '../../types/graphql';
import HtmlReader from '../../components/HtmlReader';

const EpisodeDetailScreen = () => {
  const {podcast, episode} = (useRoute().params ?? {}) as {
    episode: FeedQuery_feed;
    podcast: SearchQuery_search;
  };

  const {play, currentTrack} = usePlayerContext();
  return (
    <Box bg="white" f={1}>
      <ScrollView>
        <Box px="sm" mt="sm">
          <Box dir="row" mb="sm">
            <Box h={60} w={60} radius={10} style={{overflow: 'hidden'}} mr={10}>
              <Image
                source={{uri: `${episode.image || podcast.thumbnail}`}}
                style={{flex: 1}}
              />
            </Box>
            <Box f={1}>
              <Text bold size="sm">
                {episode.title}
              </Text>
            </Box>
            <Box w={50} />
          </Box>

          <Box dir="row" mb="sm">
            <TouchableOpacity
              onPress={() => {
                if (!episode) {
                  return;
                }

                play({
                  title: `${episode?.title}`,
                  artwork: episode.image ?? podcast.thumbnail,
                  id: episode.linkUrl,
                  url: episode.linkUrl,
                  artist: podcast.artist,
                });
              }}>
              <Icon name="play" size={30} color={theme.color.blueLight} />
            </TouchableOpacity>
            <Box>
              <Text bold size="sm">
                Play
              </Text>
              <Text size="sm" color="greyLightest">
                {humanDuration(episode.duration)}
              </Text>
            </Box>
          </Box>
          {/* separator */}
          <Box h={1} bg="greyLight" mb="sm" />

          {/* episode notes */}
          <Box>
            <Text size="xl" bold>
              Episode Notes
            </Text>
            <HtmlReader html={episode.description} />
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default EpisodeDetailScreen;
