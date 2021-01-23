import React, {FC} from 'react';
import {Box, Text} from 'react-native-design-utility';
import {getWeekDay, humanDuration} from '../../lib/dateTimeHelper';
import {FeedQuery_feed, SearchQuery_search} from '../../types/graphql';

type Props = {
  item: FeedQuery_feed;
};

const DetailsListItem: FC<Props> = ({item}) => {
  return (
    <Box px="sm">
      <Text size="xs" color="grey">
        {getWeekDay(new Date(item.pubDate)).toUpperCase()}
      </Text>
      <Text bold size="xs">
        #{item.title}
      </Text>
      <Text size="sm" numberOfLines={2}>
        {item.description}
      </Text>
      <Text size="sm" color="grey">
        {humanDuration(item.duration)}
      </Text>
    </Box>
  );
};

export default DetailsListItem;
