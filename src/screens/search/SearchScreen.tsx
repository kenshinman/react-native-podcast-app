import React, {useEffect, useState} from 'react';
import {Box, Text} from 'react-native-design-utility';
import {TextInput, StyleSheet, FlatList} from 'react-native';
import {theme} from '../../constants/theme';
import PodcastListItem from '../../components/PodcastListItem';
import {useLazyQuery} from '@apollo/client';
import {
  SearchQuery,
  SearchQueryVariables,
  SearchQuery_search,
} from '../../types/graphql';
import searchQuery from '../../graphql/query/searchQuery';
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

  useEffect(() => {
    console.log(data);
  });

  return (
    <Box f={1} bg="white">
      <Box h={50} w="100%" px="sm" my="sm">
        <TextInput
          style={styles.input}
          placeholder="Search Podcasts"
          keyboardAppearance="default"
          showSoftInputOnFocus
          onChangeText={setTerm}
          autoCorrect={false}
          onSubmitEditing={onSearch}
        />
      </Box>
      <FlatList<SearchQuery_search>
        keyboardShouldPersistTaps="never"
        contentContainerStyle={styles.listContentContainer}
        keyExtractor={(item) => String(item.feedUrl)}
        data={data?.search ?? []}
        ListEmptyComponent={
          <Box f={1} center>
            <Text color="grey">No podcasts, please search something...</Text>
          </Box>
        }
        renderItem={({item}) => <PodcastListItem item={item} />}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    flex: 1,
    backgroundColor: theme.color.greyLightest,
    borderRadius: 10,
    paddingHorizontal: theme.space.sm,
    fontSize: theme.text.size.md,
  },
  listContentContainer: {
    minHeight: '100%',
    paddingBottom: 50,
  },
});

export default SearchScreen;
