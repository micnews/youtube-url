var test = require('tape');
var youtubeUrl = require('./index');

test('youtube url valid test', function (t) {
  t.plan(2);
  t.equal(youtubeUrl.valid('https://www.youtube.com/watch?v=YoB8t0B4jx4'), true);
  t.equal(youtubeUrl.valid('https://www.other-url.com/watch?v=YoB8t0B4jx4'), false);
});
