import {gql} from '@apollo/client';

export const feedQuery = gql`
  query FeedQuery($feedUrl: String!) {
    feed(feedUrl: $feedUrl) {
      description
      duration
      image
      linkUrl
      pubDate
      text
      title
    }
  }
`;
