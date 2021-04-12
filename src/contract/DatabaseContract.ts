import {PodcastModel} from '../models/PodcastModel';

export interface IDatabaseContract {
  getAllPodcasts(): Promise<PodcastModel[]>;
  subscribedToPodcast(podcast: PodcastModel): Promise<void>;
  isReady: boolean;
}
