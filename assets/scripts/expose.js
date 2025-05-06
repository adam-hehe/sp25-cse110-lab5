// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelector = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const hornAudio = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeImg = document.querySelector('#volume-controls img');
  const button = document.querySelector('button');
  const showConfetti = new JSConfetti();

  hornSelector.addEventListener('input', () => { 
    hornImage.src = `./assets/images/${hornSelector.value}.svg`;
    hornAudio.src = `./assets/audio/${hornSelector.value}.mp3`;
  });

  volumeSlider.addEventListener('input', () => {
    const volumeValue = Number(volumeSlider.value)
    let currentLevel;

    if(volumeValue >= 67) {
      currentLevel = 3;
    }else if(volumeValue >= 33) {
      currentLevel = 2;
    }else if(volumeValue >= 1) {
      currentLevel = 1
    }else {
      currentLevel = 0;
    }

    volumeImg.src = `assets/icons/volume-level-${currentLevel}.svg`;
    hornAudio.volume = volumeValue / 100;
  });

  button.addEventListener("click", () => {
    hornAudio.currentTime = 0;
    showConfetti.addConfetti()
    hornAudio.play();
  });
}