import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Sidenav from "./components/Sidenav";
import AddEvents from "./pages/AddEvents";


function App() {
  return (
    <Router>
      <Sidenav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/addevents">
          <AddEvents/>
        </Route>
      </Switch>
    </Router>



  );
}

export default App;
