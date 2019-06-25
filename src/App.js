import React from 'react';
import './App.css';
import Q_wav from './sounds/Q.wav';
import W_wav from './sounds/W.wav';
import E_wav from './sounds/E.wav';
import A_wav from './sounds/A.wav';
import S_wav from './sounds/S.wav';
import D_wav from './sounds/D.wav';
import Z_wav from './sounds/Z.wav';
import X_wav from './sounds/X.wav';
import C_wav from './sounds/C.wav';



var trigger = ["Q","W","E","A","S","D","Z","X","C"]
var soundBank = [Q_wav,W_wav,E_wav,A_wav,S_wav,D_wav,Z_wav,X_wav,C_wav]


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true
    }
  }

  playDrum = (e) => {
    var drum_ply =document.getElementById(e.target.id.slice(0,1)); 
    // alert(e.target.id.slice(0,1));
    drum_ply.pause();
    drum_ply.currentTime = 0;
    drum_ply.play();
    
  }

  // playKeyDrum = () => {
  //   alert("boo")
  // }

  render() {
    return (
      <div className="App">
  
        <header className="App-header">
          <div id="drum-machine">
            <div id="display"></div>
  
            {
              trigger.map((el, index) => {
                return (<div className="drum-pad" id={el + "_pad"} key={index+"_pad"} onClick={(e) => this.playDrum(e)} onKeyDown={this.playKeyDrum}>
                  {el}
                  <audio className="clip" id={el} src={soundBank[index]}></audio>
                </div>)
              })
            }
          </div>
         
        </header>
      </div>
    );
  }
  
}

export default App;
