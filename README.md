## SYNOPSIS
YouTube URL tools

[![Build Status](https://travis-ci.org/micnews/youtube-url.svg)](https://travis-ci.org/micnews/youtube-url)

## USAGE

```js
var youtubeUrl = require('youtube-url');
```

## FUNCTIONS

#### youtubeUrl.valid

Validate YouTube URL

```js
youtubeUrl.valid('https://www.youtube.com/watch?v=YoB8t0B4jx4');   // true
youtubeUrl.valid('https://www.other-url.com/watch?v=YoB8t0B4jx4'); // false

// works with youtu.be URLs too
youtubeUrl.valid('http://youtu.be/vzM3nApSvMg'); // true
```

#### youtubeUrl.extractId

Extract the video ID from a YouTube URL

```js
youtubeUrl.extractId('https://www.youtube.com/watch?v=YoB8t0B4jx4');
// returns YoB8t0B4jx4

youtubeUrl.extractId('https://www.other-url.com/watch?v=YoB8t0B4jx4');
// returns false
```


##LICENSE

MIT
