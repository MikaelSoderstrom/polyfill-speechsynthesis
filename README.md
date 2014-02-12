# polyfill-speechsynthesis

> Enables window.speechSynthesis and window.SpeechSynthesisUtterance on browser without native support.

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/MikaelSoderstrom/polyfill-speechsynthesis/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

## Gettings started
```shell
bower install polyfill-speechsynthesis --save
```

### Usage

    var speech = new SpeechSynthesisUtterance('Hello, world!');
    window.speechSynthesis.speak(speech);
    
A demo page is included in ./demo/index.html