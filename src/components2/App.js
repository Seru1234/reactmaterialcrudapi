import { BrowserRouter,  Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import View from "./Students/View";
import Edit from "./Students/Edit";
// import { List } from "@material-ui/core";
import List from "./Students/List";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home/>} exact/>
          <Route  path="/view" element={<View/>} />
          <Route  path="/edit" element={<Edit/>} />
          <Route  path="/list/:id" element={<List/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
