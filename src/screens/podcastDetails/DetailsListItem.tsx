import React, {FC} from 'react';
import {Box, Text} from 'react-native-design-utility';
import {SearchQuery_search} from '../../types/graphql';

type Props = {
  item: {
    id: Number;
  };
};

const DetailsListItem: FC<Props> = ({item}) => {
  return (
    <Box px="sm">
      <Text size="xs" color="grey">
        FRIDAY
      </Text>
      <Text bold size="xs">
        #{item.id} Item
      </Text>
      <Text size="sm" numberOfLines={2}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia enim
        quibusdam consequatur perspiciatis fugit. Dignissimos, cupiditate!
        Facere tempora non, repudiandae vitae animi pariatur, tempore est libero
        voluptas molestiae dignissimos autem.
      </Text>
    </Box>
  );
};

export default DetailsListItem;
