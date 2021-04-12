import React from 'react';
import {Box, Text} from 'react-native-design-utility';
import CustomTabBar from '../../components/CustomTabBar';

const ListenNowScreen = () => {
  return (
    <Box f={1} center>
      <Text size="lg">Listen Now</Text>
      <CustomTabBar />
    </Box>
  );
};

export default ListenNowScreen;
