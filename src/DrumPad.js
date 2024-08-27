import React, { useEffect } from 'react';

function DrumPad({ pad, handleDisplay }) {
  const { key, sound, url } = pad;

  const playSound = () => {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
    handleDisplay(sound);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key.toUpperCase() === key) {
        playSound();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [key, handleDisplay, sound, playSound]);
  return (
    <div id={sound} className="drum-pad" onClick={playSound}>
      {key}
      <audio className="clip" id={key} src={url}></audio>
    </div>
  );
}

export default DrumPad;
