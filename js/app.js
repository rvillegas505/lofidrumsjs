window.addEventListener('keydown', function(e) {
    //console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) {
        return;
    } else {
        audio.currentTime = 0;
        audio.play();
    }
    console.log(audio);
})


const kick = document.querySelector('.kick');
const snare = document.querySelector('.snare');
const hihat = document.querySelector('.hihat');

kick.addEventListener('click', function(e) {
    const audioclick = document.querySelector('.audiokick');
    audioclick.currentTime = 0;
    audioclick.play();
})

snare.addEventListener('click', function(e) {
    const audioclick = document.querySelector('.audiosnare');
    audioclick.currentTime = 0;
    audioclick.play();
})

hihat.addEventListener('click', function(e) {
    const audioclick = document.querySelector('.audiohihat');
    audioclick.currentTime = 0;
    audioclick.play();
})