import React from 'react';
import {Box, Text} from 'react-native-design-utility';

const EmptySearchState = () => {
  return (
    <Box f={1} center>
      <Text color="grey">No podcasts, please search something...</Text>
    </Box>
  );
};

export default EmptySearchState;
