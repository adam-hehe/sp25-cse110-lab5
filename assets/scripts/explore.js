window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const smileImage = document.querySelector('img');
  const speechButton = document.querySelector('button');
  const speechText = document.getElementById('text-to-speak');

  const synth = window.speechSynthesis;
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
    let defaultChosen = false;
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default && !defaultChosen) {
        option.textContent += " — DEFAULT";
        defaultChosen = true;
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  

  speechButton.addEventListener('click', () => {
    const speakThis = 
    new SpeechSynthesisUtterance(speechText.value);
    const selectedOption =
    voiceSelect.selectedOptions[0].getAttribute("data-name");

    //Do nothing if there is no selected option
    if (!selectedOption) {
      return;
    }

    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        speakThis.voice = voices[i];
      }
    }

    speakThis.onstart = () => {
      smileImage.src = 'assets/images/smiling-open.png';
    };

    speakThis.onend = () => {
      smileImage.src = 'assets/images/smiling.png';
    };

    synth.speak(speakThis);
  });
}