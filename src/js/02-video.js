import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (response) {
    localStorage.setItem('videoplayer-current-time', response.seconds);
  }, 1000)
);

document.addEventListener('DOMContentLoaded', () => {
  player
    .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
    .then(function (seconds) {})
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

        default:
          // some other error occurred
          break;
      }
    });
});
