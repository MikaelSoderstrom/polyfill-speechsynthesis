(function () {
    'use strict';

    var nativeSupport = !! window.SpeechSynthesisUtterance || !! window.speechSynthesis;

    if (nativeSupport) {
        return;
    }

    window.SpeechSynthesisUtterance = function (text) {
        return {
            lang: 'en',
            volume: 1.0,
            rate: 1.0,
            onEnd: function () {},
            text: text
        };
    };

    window.speechSynthesis = {
        speak: function (utterance) {
            var audio = new Audio('http://translate.google.com/translate_tts?ie=UTF-8&q=' + utterance.text + '&tl=' + utterance.lang + '&total=1&idx=0&textlen=' + utterance.text.length);
            audio.play();
        }
    };

    console.log(nativeSupport);
})();