import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {Alert} from 'react-native';
import {Box, Text} from 'react-native-design-utility';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {getWeekDay, humanDuration} from '../../lib/dateTimeHelper';
import {FeedQuery_feed, SearchQuery_search} from '../../types/graphql';

type Props = {
  item: FeedQuery_feed;
  podcast: SearchQuery_search;
};

const DetailsListItem: FC<Props> = ({item, podcast}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('EpisodeDetails', {episode: item, podcast})
      }>
      <Box px="sm">
        <Text size="xs" color="grey">
          {getWeekDay(new Date(item.pubDate)).toUpperCase()}
        </Text>
        <Text bold size="xs">
          #{item.title}
        </Text>
        <Text size="sm" numberOfLines={2}>
          {item.summary}
        </Text>
        <Text size="sm" color="grey">
          {humanDuration(item.duration)}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

export default DetailsListItem;
