import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {Box, Text} from 'react-native-design-utility';
import {FlatList, Image, StyleSheet} from 'react-native';
import {SearchStackRouteParamList} from '../../navigation/types';
import PodcastDetailsHeader from './PodcastDetailsHeader';
import DetailsListItem from './DetailsListItem';

type NavigationParams = RouteProp<SearchStackRouteParamList, 'PodcastDetail'>;

const PodcastDetailsScreen = () => {
  const {data} = useRoute<NavigationParams>().params ?? {};
  return (
    <Box f={1} bg="white">
      <FlatList
        data={[{id: 1}, {id: 2}]}
        ListHeaderComponent={<PodcastDetailsHeader data={data} />}
        keyExtractor={(item) => item.id.toString()}
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
