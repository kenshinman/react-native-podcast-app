import React, {useState} from 'react';
import {Box, Text} from 'react-native-design-utility';
import {TextInput, StyleSheet, FlatList} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {theme} from '../../constants/theme';
import PodcastListItem from '../../components/PodcastListItem';
import {useLazyQuery} from '@apollo/client';
import {
  SearchQuery,
  SearchQueryVariables,
  SearchQuery_search,
} from '../../types/graphql';
import searchQuery from '../../graphql/query/searchQuery';
import EmptySearchState from '../../components/EmptySearchState';
import SearchLoading from '../../components/SearchLoading';
const d = [{id: 1}, {id: 2}];

const SearchScreen = () => {
  const [term, setTerm] = useState<string>('');
  const [search, {data, loading, error}] = useLazyQuery<
    SearchQuery,
    SearchQueryVariables
  >(searchQuery);

  const onSearch = async () => {
    try {
      await search({variables: {term}});
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <Box f={1} bg="white">
      <Box h={50} w="100%" px="sm" my="sm">
        <Box
          f={1}
          dir="row"
          align="center"
          bg="greyLightest"
          px="sm"
          h={50}
          radius={10}>
          <Box mr={10}>
            <FeatherIcon
              name="search"
              size={20}
              color={theme.color.blueLight}
            />
          </Box>
          <TextInput
            style={styles.input}
            placeholder="Search Podcasts"
            keyboardAppearance="default"
            showSoftInputOnFocus
            onChangeText={setTerm}
            autoCorrect={false}
            onSubmitEditing={onSearch}
            clearButtonMode="unless-editing"
            clearTextOnFocus
          />
        </Box>
      </Box>
      {error ? (
        <Box f={1} center>
          <Text color="red">{error.message}</Text>
        </Box>
      ) : (
        <FlatList<SearchQuery_search>
          keyboardShouldPersistTaps="never"
          contentContainerStyle={styles.listContentContainer}
          keyExtractor={(item, index) => `${item.feedUrl}-${index}`}
          data={data?.search ?? []}
          ListEmptyComponent={<>{!loading && <EmptySearchState />}</>}
          ListHeaderComponent={<>{loading && <SearchLoading />}</>}
          renderItem={({item}) => <PodcastListItem item={item} />}
        />
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    flex: 1,
    borderRadius: 10,
    fontSize: theme.text.size.md,
  },
  listContentContainer: {
    minHeight: '100%',
    paddingBottom: 50,
  },
});

export default SearchScreen;
