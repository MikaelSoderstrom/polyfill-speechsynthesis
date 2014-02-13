# polyfill-speechsynthesis

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/MikaelSoderstrom/polyfill-speechsynthesis/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

> Enables window.speechSynthesis and window.SpeechSynthesisUtterance on browser without native support.

## Gettings started
```shell
bower install polyfill-speechsynthesis --save
```

### Usage

    var speech = new SpeechSynthesisUtterance('Hello, world!');
    window.speechSynthesis.speak(speech);
    
A demo page is included in ./demo/index.html


#### Versions

##### 0.0.3
Added a Grunt file with JSHint and Uglify
Added a minified version of the polyfill (file size ~0.5 KB)
Added source maps

##### 0.0.2
Added CORS Proxy
Bug fixes

##### 0.0.1
Initial release