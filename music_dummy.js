(function(){
    const context = new AudioContext();
    const buffer = null;
    const source = context.createBufferSource();
    const request = new XMLHttpRequest();
    request.open('GET', 'tamahome.mp3', true);
    request.responseType = 'arraybuffer';
    request.send();
    
    request.onload = function () {
        var res = request.response;
        context.decodeAudioData(res, function (buf) {
        source.buffer = buf;
        });
    };
    source.connect(context.destination);
    source.start(0);
    
})();