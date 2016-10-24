var test = require('tape');
var youtubeUrl = require('./index');

var validUrls = [
  {url: 'https://www.youtube.com/watch?v=YoB8t0B4jx4', id: 'YoB8t0B4jx4'},
  {url: 'https://youtube.com/watch?v=YoB8t0B4jx4', id: 'YoB8t0B4jx4'},
  {url: 'https://www.youtube.com/watch/YoB8t0B4jx4', id: 'YoB8t0B4jx4'},
  {url: 'http://www.youtube.com/watch/YoB8t0B4jx4', id: 'YoB8t0B4jx4'},
  {url: 'http://www.youtube.com/watch?v=YoB8t0B4jx4', id: 'YoB8t0B4jx4'},
  {url: 'http://youtube.com/watch?v=YoB8t0B4jx4', id: 'YoB8t0B4jx4'},
  {url: 'www.youtube.com/watch?v=YoB8t0B4jx4', id: 'YoB8t0B4jx4'},
  {url: 'youtube.com/watch?v=YoB8t0B4jx4', id: 'YoB8t0B4jx4'},
  {url: 'http://www.youtube.com/v/0zM3nApSvMg?fs=1&amp;hl=en_US&amp;rel=0', id: '0zM3nApSvMg'},
  {url: 'http://www.youtube.com/embed/0zM3nApSvMg?rel=0', id: '0zM3nApSvMg'},
  {url: 'http://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index', id: '0zM3nApSvMg'},
  {url: 'http://www.youtube.com/watch?v=0zM3nApSvMg', id: '0zM3nApSvMg'},
  {url: 'http://youtu.be/0zM3nApSvMg', id: '0zM3nApSvMg'},
  {url: 'http://youtu.be/vzM3nApSvMg', id: 'vzM3nApSvMg'},
  {url: 'http://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s', id: '0zM3nApSvMg'},
  {url: 'youtube.com/watch?v=0zM3nApSvMg#t=0m10s', id: '0zM3nApSvMg'},

  {url: '//www.youtube.com/embed/0zM3nApSvMg?rel=0', id: '0zM3nApSvMg'},
  {url: '//www.youtube.com/v/0zM3nApSvMg?fs=1&amp;hl=en_US&amp;rel=0', id: '0zM3nApSvMg'},
  {url: '//www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s', id: '0zM3nApSvMg'},
  {url: '//www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index', id: '0zM3nApSvMg'},
  {url: '//www.youtube.com/watch?v=0zM3nApSvMg', id: '0zM3nApSvMg'},
  {url: '//www.youtube.com/watch?v=YoB8t0B4jx4', id: 'YoB8t0B4jx4'},
  {url: '//youtu.be/0zM3nApSvMg', id: '0zM3nApSvMg'},
  {url: '//youtu.be/vzM3nApSvMg', id: 'vzM3nApSvMg'},
  {url: '//youtube.com/watch?v=0zM3nApSvMg#t=0m10s', id: '0zM3nApSvMg'},
  {url: '//youtube.com/watch?v=YoB8t0B4jx4', id: 'YoB8t0B4jx4'},

  {url: 'https://m.youtube.com/watch?v=j4ErjX8p20s', id: 'j4ErjX8p20s'},
  {url: 'http://m.youtube.com/watch?v=j4ErjX8p20s', id: 'j4ErjX8p20s'},
  {url: '//m.youtube.com/watch?v=j4ErjX8p20s', id: 'j4ErjX8p20s'},
  {url: 'm.youtube.com/watch?v=j4ErjX8p20s', id: 'j4ErjX8p20s'}
];

var invalidUrls = [
  'https://www.other-url.com/watch?v=YoB8t0B4jx4',
  'https://www.youtube.com/',
  'https://www.youtube.com/feed/history',
  'google.com/embed/0zM3nApSvMg',

  '//www.other-url.com/watch?v=YoB8t0B4jx4',
  '//www.youtube.com/',
  '//www.youtube.com/feed/history',
];

test('youtube url valid test', function (t) {
  validUrls.forEach(function (url) {
    t.equal(youtubeUrl.valid(url.url), true, url.url);
  })
  t.end()
});

test('youtube url invalid test', function (t) {
  invalidUrls.forEach(function (url) {
    t.equal(youtubeUrl.valid(url), false, url);
  })
  t.end()
});

test('extract video id', function (t) {
  validUrls.forEach(function (url) {
    t.equal(youtubeUrl.extractId(url.url), url.id, url.url);
  })
  t.end()
});

test('extract video id from invalid url', function (t) {
  invalidUrls.forEach(function (url) {
    t.false(youtubeUrl.extractId(url), url);
  })
  t.end()
});
