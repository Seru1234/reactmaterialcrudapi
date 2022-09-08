import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import View from "./components/student/View";
import Edit from "./components/student/Edit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route  path="/" element={<Home/>} exact/>

          
          <Route  path="/view/:id" element={<View/>} />
          <Route  path="/edit/:id" element={<Edit/>} />
          {/* <Route  path="/list" element={<List/>} /> */}

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
