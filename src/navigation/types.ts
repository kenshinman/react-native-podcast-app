import {FeedQuery_feed, SearchQuery_search} from '../types/graphql';

export type SearchStackRouteParamList = {
  Search: undefined;
  PodcastDetail: {
    data: SearchQuery_search;
  };
};

export type PodcastStackRouteParams = {
  PodcastDetails: {
    episode: FeedQuery_feed;
    podcast: SearchQuery_search;
  };
  EpisodeDetails: {
    episode: FeedQuery_feed;
    podcast: SearchQuery_search;
  };
};
