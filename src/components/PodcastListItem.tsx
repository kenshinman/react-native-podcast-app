import React, {FC} from 'react';
import {Box, Text} from 'react-native-design-utility';

interface Props {
  item: {
    id: Number;
  };
}

const PodcastListItem: FC<Props> = ({item}) => {
  return (
    <Box h={90} dir={'row'} align="center" px="sm">
      <Box h={70} w={70} bg="blueLight" mr={10} radius={10} />
      <Box>
        <Text bold> item {item.id}</Text>
        <Text size="xs" color="grey">
          This is the subtitle
        </Text>
        <Text size="xs" color="blueLight">
          4000 Episodes
        </Text>
      </Box>
    </Box>
  );
};

export default PodcastListItem;
