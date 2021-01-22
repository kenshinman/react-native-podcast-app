import React, {FC} from 'react';
import {Box, Text} from 'react-native-design-utility';
import {FeedQuery_feed, SearchQuery_search} from '../../types/graphql';

type Props = {
  item: FeedQuery_feed;
};

const DetailsListItem: FC<Props> = ({item}) => {
  return (
    <Box px="sm">
      <Text size="xs" color="grey">
        FRIDAY
      </Text>
      <Text bold size="xs">
        #{item.title}
      </Text>
      <Text size="sm" numberOfLines={2}>
        {item.description}
      </Text>
    </Box>
  );
};

export default DetailsListItem;
