import Background from "./components/Background";
import BgVideoSelectBox from "./components/BgVideoSelectBox";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="">
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black/95"></div> */}
      <Background></Background>
      <Header></Header>
      <Sidebar></Sidebar>
      <BgVideoSelectBox></BgVideoSelectBox>
    </div>
  );
}

export default App;
