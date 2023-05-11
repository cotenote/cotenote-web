export const getSpeech = (text) => {
  let voices = [];

  const setVoiceList = () => {
    voices = window.speechSynthesis.getVoices();
  };

  setVoiceList();

  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = setVoiceList;
  }

  const speech = (txt) => {
    const lang = "ko-KR";
    const utterThis = new SpeechSynthesisUtterance(txt);

    utterThis.lang = lang;

    const korVoice = voices.find(
      (elem) => elem.lang === lang || elem.lang === lang.replace("-", "_"),
    );

    if (korVoice) {
      utterThis.voice = korVoice;
    } else {
      return;
    }

    window.speechSynthesis.speak(utterThis);
  };

  speech(text);
};
