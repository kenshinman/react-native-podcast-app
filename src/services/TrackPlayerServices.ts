import TrackPlayer from 'react-native-track-player';

export default async function trackPlayerServices() {
  TrackPlayer.addEventListener('remote-play', () => TrackPlayer.play());
  TrackPlayer.addEventListener('remote-pause', () => TrackPlayer.pause());
  TrackPlayer.addEventListener('remote-stop', () => TrackPlayer.stop());
  TrackPlayer.addEventListener('playback-track-changed', (state) => {});
  TrackPlayer.addEventListener('playback-state', (state) => {
    console.log({state});
  });
}
