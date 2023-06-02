import "./App.css";
import Logo from "./Components/Logo/Logo";
import Inputs from "./Components/Inputs/Inputs";
import Buttons from "./Components/Buttons/Buttons";

function App() {
  return (
    <div className="bg-gray-100 h-[100vh] flex justify-center	 items-center	">
      <div className="bg-gray-100 w-[40%] h-[100vh]">
      <Logo />
      <Inputs />
      <Buttons />
    </div>
    </div>
  );
}

export default App;
