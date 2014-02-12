(function () {
    var btn = document.getElementById('btn')

    btn.addEventListener('click', function () {
        var txt = document.getElementById('txt');

        var speech = new SpeechSynthesisUtterance(txt.value);
        speech.lang = 'en'; // sv
        window.speechSynthesis.speak(speech);
        
        /*
        var u = new window.SpeechSynthesisUtterance('Bra! Bilden visar en apa, och du svarade ' + answerVal);
					u.lang = 'sv';
					u.volume = 1.0;
					u.rate = 1.0;
					u.onend = function(event) {
						console.log('Finished in ' + event.elapsedTime + ' seconds.');
					};
					speechSynthesis.speak(u);
        */
    });
})();