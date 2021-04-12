import React, {FC} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const CustomTabBar = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: 'lightgreen',
  },
});

export default CustomTabBar;
