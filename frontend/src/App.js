import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ContactBar from "./components/ContactBar";
import Edit from "./components/Update";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app__body">
          <Switch>
            <Route path="/addUser" component={Sidebar} />
            <Route path="/edit/:id" component={Edit} />

            <Route exact path="/" component={ContactBar} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
