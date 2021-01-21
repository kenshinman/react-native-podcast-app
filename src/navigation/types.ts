import {SearchQuery_search} from '../types/graphql';

export type SearchStackRouteParamList = {
  Search: undefined;
  PodcastDetail: {
    data: SearchQuery_search;
  };
};
