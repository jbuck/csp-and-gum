# Content Security Policy & getUserMedia

This is a small node server that serves up various combinations of media-src policies to see which browsers support what.

## What Content Security Policy should I use?

As of Chrome 31 & Firefox 25, you should use `media-src: 'self' mediastream:'`.

Chrome media streams are considered part of the page's origin, which is why you should use `'self'`
Firefox media streams are a completely different protocol, which is why you should use `mediastream:`
