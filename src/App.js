import Particle from "../src/components/particles";
import Landing from "./components/Landing";
import Main from "./components/Main";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/main" element={<Main/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
