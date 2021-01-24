import React, {createContext, FC, useContext, useEffect, useState} from 'react';
import TrackPlayer, {
  Track,
  State as TrackPlayerState,
  STATE_STOPPED,
  STATE_PLAYING,
  STATE_PAUSED,
  useTrackPlayerEvents,
} from 'react-native-track-player';

interface PlayerContextType {
  isPlaying: boolean;
  isPaused: boolean;
  isStopped: boolean;
  isEmpty: boolean;
  currentTrack: Track | null;
  play: (track: Track) => void;
  pause: () => void;
}

const PlayerContext = createContext<PlayerContextType>({
  isPlaying: false,
  isPaused: false,
  isStopped: false,
  isEmpty: true,
  currentTrack: null,
  play: () => null,
  pause: () => null,
});

const PlayerContextProvider: FC = ({children}) => {
  const [playerState, setPlayerState] = useState<null | TrackPlayerState>(null);
  const [currentTrack, setCurrentTrack] = useState<null | Track>(null);

  useTrackPlayerEvents(['playback-state'], (event: any) => {
    setPlayerState(event.state);
  });

  useEffect(() => {
    const listener = TrackPlayer.addEventListener(
      'playback-state',
      ({state}: {state: TrackPlayerState}) => {
        console.log('state => ', state);
        setPlayerState(state);
      },
    );

    return listener.remove();
  }, []);

  useEffect(() => {
    console.log({playerState});
  }, [playerState]);

  const play = async (track: Track) => {
    // await TrackPlayer.stop();
    await TrackPlayer.add([track]);
    setCurrentTrack(track);

    await TrackPlayer.play();
  };

  const pause = async () => {
    await TrackPlayer.pause();
  };

  const values: PlayerContextType = {
    isPlaying: playerState === STATE_PLAYING,
    isPaused: playerState === STATE_PAUSED,
    isStopped: playerState === STATE_STOPPED,
    isEmpty: playerState === null,
    currentTrack,
    play,
    pause,
  };

  return (
    <PlayerContext.Provider value={values}>{children}</PlayerContext.Provider>
  );
};

export default PlayerContextProvider;

export const usePlayerContext = () => useContext(PlayerContext);
