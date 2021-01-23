import React, {FC} from 'react';
import {ActivityIndicator, Image, StyleSheet} from 'react-native';
import {Box, Text} from 'react-native-design-utility';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {theme} from '../../constants/theme';
import {usePlayerContext} from '../../contexts/PlayerContext';

import {FeedQuery_feed, SearchQuery_search} from '../../types/graphql';

type Props = {
  data: SearchQuery_search;
  latestFeed?: FeedQuery_feed | null;
  loading?: Boolean;
};

const PodcastDetailsHeader: FC<Props> = ({data, latestFeed, loading}) => {
  if (loading) {
    return (
      <Box h={200}>
        <ActivityIndicator color={theme.color.blueLight} size={'large'} />
      </Box>
    );
  }
  const {play} = usePlayerContext();
  return (
    <>
      <Box dir="row" px="sm" mt="sm" mb="md">
        {data.thumbnail && (
          <Box mr={10}>
            <Image style={s.image} source={{uri: `${data.thumbnail}`}} />
          </Box>
        )}
        <Box f={1}>
          <Text size="lg" bold numberOfLines={2}>
            {data.podcastName}
          </Text>
          <Text size="xs" color="grey">
            {data.artist}
          </Text>
          <Text size="xs" color="blueLight">
            Subscribed
          </Text>
        </Box>
      </Box>
      <Box px="sm" mb="md" dir="row" align="center">
        <Box mr={10}>
          <TouchableOpacity
            onPress={() => {
              if (!latestFeed) {
                return;
              }
              play({
                title: `${latestFeed?.title}`,
                artwork: latestFeed.image ?? data.thumbnail,
                id: latestFeed.linkUrl,
                url: latestFeed.linkUrl,
                artist: data.artist,
              });
            }}>
            <FeatherIcon name="play" size={30} color={theme.color.blueLight} />
          </TouchableOpacity>
        </Box>
        <Box f={1}>
          <Text bold>Play</Text>
          <Text size="sm">{latestFeed?.title}</Text>
        </Box>
      </Box>
      <Box px="sm" mb="md">
        <Text bold size="lg">
          Episodes
        </Text>
      </Box>
    </>
  );
};
const s = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
});

export default PodcastDetailsHeader;
