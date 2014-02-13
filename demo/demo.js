(function () {
    'use strict';
    
    var btn = document.getElementById('btn');

    btn.addEventListener('click', function () {
        var txt = document.getElementById('txt');

        var speech = new SpeechSynthesisUtterance(txt.value);
        speech.lang = document.getElementById('lang').value;
        speech.volume = parseInt(document.getElementById('vol').value) / 100;
        
        speech.onstart = function() {
            console.log('Starting...');
        };
        
        speech.onend = function() {
            console.log('Stopping...');
        };
        
        speechSynthesis.speak(speech);
    });
})();