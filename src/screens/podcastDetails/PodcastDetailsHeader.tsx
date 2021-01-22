import React, {FC} from 'react';
import {Image, StyleSheet} from 'react-native';
import {Box, Text} from 'react-native-design-utility';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {theme} from '../../constants/theme';

import {SearchQuery_search} from '../../types/graphql';

type Props = {
  data: SearchQuery_search;
};

const PodcastDetailsHeader: FC<Props> = ({data}) => {
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
          <FeatherIcon name="play" size={30} color={theme.color.blueLight} />
        </Box>
        <Box>
          <Text bold>Play</Text>
          <Text size="sm"># 400 The last episode</Text>
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
