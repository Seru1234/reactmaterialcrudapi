import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Edit from "./Students/Edit";
import List from "./Students/List";
import View from "./Students/View";

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/view:id" component={View} />
          <Route exact path="/edit/:id" component={Edit} />
          <Route exact path="/list/:id" component={List} />

        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
