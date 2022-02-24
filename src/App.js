import logo from './logo.svg';
import './App.css';
import Svg from './FileFormatExp/svg/Svg';
import Gif from './FileFormatExp/gif/Gif';
import Webm from './FileFormatExp/webm/Webm';
import Ogg from './FileFormatExp/ogg/Ogg';
import Wav from './FileFormatExp/wav/Wav';
import Mp4 from './FileFormatExp/mp4/Mp4';
import Glb from './FileFormatExp/glb/Glb';
import Gltf from './FileFormatExp/gltf/Gltf';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Rotating React Logo</p>
        <img src={logo} className="App-logo" alt="logo" />
        <Gif />
        <Webm />
        <Ogg />
        <Wav />
        <Mp4 />
        <Glb />
        {/* <Gltf /> Work In Progress */}
        <Svg />
      </header>
    </div>
  );
}

export default App;
