import "./App.css";
import ContactBar from "./components/ContactBar";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <ContactBar />
      </div>
    </div>
  );
}

export default App;
