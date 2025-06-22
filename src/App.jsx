import { useContext } from 'react';
import './App.css';
import Display from './components/display';
import Player from './components/Player';
import Sidebar from './components/sidebar';
import { PlayerContext } from './context/PlayerContext';

function App() {
  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto" />
    </div>
  );
}

export default App;

