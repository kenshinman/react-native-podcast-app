import React from 'react';
import {Box, Text} from 'react-native-design-utility';
import {TextInput, StyleSheet, FlatList} from 'react-native';
import {theme} from '../../constants/theme';
import {color} from 'react-native-reanimated';
import PodcastListItem from '../../components/PodcastListItem';
const data = [{id: 1}, {id: 2}];

const SearchScreen = () => {
  return (
    <Box f={1} bg="white">
      <Box h={50} w="100%" px="sm" my="sm">
        <TextInput
          style={styles.input}
          placeholder="Search Podcasts"
          keyboardAppearance="default"
          showSoftInputOnFocus
        />
      </Box>
      <FlatList
        keyExtractor={(item) => String(item.id)}
        data={data}
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
  list: {
    minHeight: '100%',
  },
});

export default SearchScreen;
