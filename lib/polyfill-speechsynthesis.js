(function () {
    'use strict';

    if ( !! window.SpeechSynthesisUtterance || !! window.speechSynthesis) {
        return;
    }

    window.SpeechSynthesisUtterance = function (text) {
        return {
            lang: 'en',
            volume: 1.0,
            onend: function () {},
            onstart: function () {},
            text: text
        };
    };

    window.speechSynthesis = {
        speak: function (utterance) {
            var url = 'http://translate.google.com/translate_tts?&q=' + utterance.text + '&tl=' + utterance.lang;
            var audio = new Audio(url);
            audio.volume = utterance.volume;
            audio.play();
            audio.addEventListener('ended', utterance.onend);
            audio.addEventListener('play', utterance.onstart);
        }
    };
})();