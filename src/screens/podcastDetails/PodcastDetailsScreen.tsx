import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {Box, Text} from 'react-native-design-utility';
import {FlatList, StyleSheet} from 'react-native';

import {SearchStackRouteParamList} from '../../navigation/types';
import PodcastDetailsHeader from './PodcastDetailsHeader';
import DetailsListItem from './DetailsListItem';
import {FeedQuery, FeedQueryVariables} from '../../types/graphql';
import {feedQuery} from '../../graphql/query/feedQuery';
import {useQuery} from '@apollo/client';

type NavigationParams = RouteProp<SearchStackRouteParamList, 'PodcastDetail'>;

const PodcastDetailsScreen = () => {
  const {data: podcastData} = useRoute<NavigationParams>().params ?? {};

  const {data, loading} = useQuery<FeedQuery, FeedQueryVariables>(feedQuery, {
    variables: {
      feedUrl: podcastData.feedUrl,
    },
  });

  return (
    <Box f={1} bg="white">
      <FlatList
        data={data?.feed}
        ListHeaderComponent={
          <PodcastDetailsHeader
            data={podcastData}
            latestFeed={data?.feed[0]}
            loading={loading}
          />
        }
        keyExtractor={(item) => item.linkUrl}
        ItemSeparatorComponent={() => (
          <Box px="sm" my="sm" w="100%">
            <Box style={{height: StyleSheet.hairlineWidth}} bg="grey"></Box>
          </Box>
        )}
        renderItem={({item}) => <DetailsListItem item={item} />}
      />
    </Box>
  );
};

const s = StyleSheet.create({});

export default PodcastDetailsScreen;
