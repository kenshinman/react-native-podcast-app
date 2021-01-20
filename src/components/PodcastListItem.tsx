import React, {FC} from 'react';
import {Image, StyleSheet} from 'react-native';
import {Box, Text} from 'react-native-design-utility';
import {SearchQuery_search} from '../types/graphql';

interface Props {
  item: SearchQuery_search;
}

const PodcastListItem: FC<Props> = ({item}) => {
  return (
    <Box h={90} dir={'row'} align="center" px="sm">
      <Box h={70} w={70} bg="blueLight" mr={10} radius={10}>
        {item.thumbnail && (
          <Image style={s.img} source={{uri: String(item.thumbnail)}} />
        )}
      </Box>
      <Box f={1}>
        <Text bold numberOfLines={1}>
          {' '}
          item {item.artist}
        </Text>
        <Text size="xs" color="grey">
          This is the subtitle
        </Text>
        <Text size="xs" color="blueLight">
          {item.episodesCount} Episodes
        </Text>
      </Box>
    </Box>
  );
};

const s = StyleSheet.create({
  img: {
    flex: 1,
    borderRadius: 10,
  },
});

export default PodcastListItem;
