import AboutMe from "./components/AboutMe";
import AudioConfiguration from "./components/AudioConfiguration";
import Background from "./components/Background";
import BgVideoSelectBox from "./components/BgVideoSelectBox";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import YoutubeAudio from "./components/Youtube";
import YoutubePlayer from "./components/YoutubePlayer";

function App() {
  return (
    <div className="bg-black/40">
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black/95"></div> */}
      <Background></Background>
      <Header></Header>
      <Sidebar></Sidebar>
      <BgVideoSelectBox></BgVideoSelectBox>
      <AudioConfiguration></AudioConfiguration>
      <YoutubeAudio></YoutubeAudio>
      <YoutubePlayer></YoutubePlayer>
      <AboutMe></AboutMe>
    </div>
  );
}

export default App;
