import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {IDatabaseContract} from '../contract/DatabaseContract';
import {PodcastModel} from '../models/PodcastModel';

interface DBContextProps {
  podcasts: PodcastModel[];
  subToPodcast: (poucast: PodcastModel) => Promise<void>;
}

export const DBContext = createContext<DBContextProps>({
  podcasts: [],
  subToPodcast: () => Promise.resolve(),
});

const DBContextProvider: FC = ({children}) => {
  const [podcasts, setPodcasts] = useState<PodcastModel[]>([]);
  const db = useRef<IDatabaseContract | null>(null);

  useEffect(() => {
    if (db.current?.isReady) {
      console.log(`This is very ready`);
      (async () => {
        if (db.current) {
          const _podcasts = await db.current.getAllPodcasts();
          setPodcasts(_podcasts);
        }
      })();
    } else {
      console.log('not ready oo');
    }
  }, [db.current?.isReady]);

  const subToPodcast = async (podcast: PodcastModel) => {
    if (db.current) {
      await db.current.subscribedToPodcast(podcast);
      const _podcasts = await db.current.getAllPodcasts();
      setPodcasts(_podcasts);
    }
  };

  const value: DBContextProps = {
    podcasts,
    subToPodcast,
  };

  return <DBContext.Provider value={value}>{children}</DBContext.Provider>;
};

export const usePodcastsDB = () => useContext(DBContext);

export default DBContextProvider;
