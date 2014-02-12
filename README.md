# polyfill-speechsynthesis

Enables window.speechSynthesis and window.SpeechSynthesisUtterance on browser without native support.

## Usage

    var speech = new SpeechSynthesisUtterance('Hello, world!');
    window.speechSynthesis.speak(speech);
    
A demo page is included in ./demo/index.html