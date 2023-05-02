const allKeys = document.querySelectorAll('.key');
console.log(allKeys);


window.addEventListener('keydown', (e) => {
    console.log(e.keyCode)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if (!key || !audio) return;
    console.log(audio, key);
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
});


allKeys.forEach(item => {
    item.addEventListener('transitionend', function (e) {
        // console.log(e)
        item.classList.remove('playing')
    })
})