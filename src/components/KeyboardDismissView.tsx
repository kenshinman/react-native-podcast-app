import React, {FC} from 'react';
import {Keyboard, ScrollView, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
  withScrollView?: Boolean;
}

const KeyboardDismissView: FC<Props> = ({withScrollView, children}) => {
  if (withScrollView) {
    return (
      <ScrollView
        keyboardShouldPersistTaps="never"
        contentContainerStyle={s.container}>
        {children}
      </ScrollView>
    );
  } else {
    return (
      <TouchableOpacity activeOpacity={1} onPress={Keyboard.dismiss}>
        {children}
      </TouchableOpacity>
    );
  }
};

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default KeyboardDismissView;
