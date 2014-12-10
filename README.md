## SYNOPSIS
YouTube url tools

[![Build Status](https://travis-ci.org/micnews/youtube-url.svg)](https://travis-ci.org/micnews/youtube-url)

## USAGE

```js
var youtubeUrl = require('youtube-url');
```

## FUNCTIONS

#### youtubeUrl.valid

Validate YouTube url

```js
youtubeUrl.valid('https://www.youtube.com/watch?v=YoB8t0B4jx4');   // true
youtubeUrl.valid('https://www.other-url.com/watch?v=YoB8t0B4jx4'); // false
```

##LICENSE

MIT
