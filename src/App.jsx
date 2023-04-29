import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [activeKet, setActiveKet] = useState('')

  useEffect(() =>{
    document.addEventListener('keydown', (event) => {
      handlePlaySound(event.key.toUpperCase())
    })
  },[])

  /* aqui es donde cada keycode significa una letra y el src lo da freecodecamp apra hacer el sonido */
  const drumPads = [
    {
      keyCode: 81,
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      keyCode: 87,
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      keyCode: 69,
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      keyCode: 65,
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      keyCode: 83,
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      keyCode: 68,
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      keyCode: 90,
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      keyCode: 88,
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      keyCode: 67,
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ];

  
  function handlePlaySound(selector){
    const audio = document.getElementById(selector)
    audio.play();
    setActiveKet(selector)
  }
  return <div className="App">
    <div id="drum-machine" className="drum-machine">
      <div id="display" className="display">You pressed:{activeKet}</div>
      <div className="drum-pads">
        {
          drumPads.map((drumPad) => (
            <div className="drum-pad" key={drumPad.src} id={drumPad.src} onClick={() => handlePlaySound(drumPad.text)}>
              {drumPad.text}
              <audio id={drumPad.text} className="clip" src={drumPad.src}></audio>
            </div>
          ))
        }
      </div>

      </div>
    </div>
}

export default App;
