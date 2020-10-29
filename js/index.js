const clockface = document.querySelector('#timer-1');
const daysRef = document.querySelector('.days ');
const hoursRef = document.querySelector('.hours');
const minsRef = document.querySelector('.mins ');
const secsRef = document.querySelector('.secs');

class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
}
const countdown = new CountdownTimer('#timer-1', new Date('Jan 01, 2021'));

const timer = {
  start() {
    setInterval(() => {
      const currentTime = Date.now();

      const time = countdown.targetDate - currentTime;

      updateClockface(time);
    }, 1000);
  },
};

timer.start();

const updateClockface = function (time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  daysRef.textContent = `${days}`;
  hoursRef.textContent = `${hours}`;
  minsRef.textContent = `${mins}`;
  secsRef.textContent = `${secs}`;
};
const pad = function (value) {
  return String(value).padStart(2, '0');
};
