import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {Image, StyleSheet} from 'react-native';
import {Box, Text} from 'react-native-design-utility';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SearchQuery_search} from '../types/graphql';

interface Props {
  item: SearchQuery_search;
}

const PodcastListItem: FC<Props> = ({item}) => {
  const navigation = useNavigation();

  return (
    <Box h={90} dir={'row'} align="center" px="sm">
      <Box h={70} w={70} bg="blueLight" mr={10} radius={10}>
        {item.thumbnail && (
          <Image style={s.img} source={{uri: String(item.thumbnail)}} />
        )}
      </Box>
      <Box f={1}>
        <Text bold numberOfLines={1}>
          {item.podcastName}
        </Text>
        <Text size="xs" color="grey">
          This is the subtitle
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('PodcastDetails', {data: item})}>
          <Text size="xs" color="blueLight">
            {item.episodesCount} Episodes
          </Text>
        </TouchableOpacity>
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
