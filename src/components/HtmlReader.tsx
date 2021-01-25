import React, {FC} from 'react';
import {Linking} from 'react-native';
import HTML from 'react-native-render-html';

import {theme} from '../constants/theme';

interface Props {
  html: string;
}

const HtmlReader: FC<Props> = ({html}) => {
  return (
    <HTML
      source={{html}}
      onLinkPress={(event, href) => {
        Linking.openURL(href);
      }}
      tagsStyles={{
        a: {
          color: theme.color.blueLight,
          fontWeight: 'bold',
        },
      }}
    />
  );
};

export default HtmlReader;
