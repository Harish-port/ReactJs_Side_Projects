import "./App.css";
import Home from "./components/Home/Home";
import { useState ,useEffect} from "react";
import SelectOption from "./components/SelectOption/SelectOption";
import TableFeed from "./components/TableFeed/TableFeed";
import * as Utils from "./services/ApiHelper";

function App() {
  
  const [states, setStates] = useState([]);
  const getStates = async () => {
    await Utils.getStates().then((result) => {
      const recievedData = result.data.states;
      setStates(recievedData);
    });
  };
  useEffect(() => {
    getStates();
  }, []);
  return (
    <div className="App">
      <Home />
      <SelectOption states={states} />
      <TableFeed />
    </div>
  );
}

export default App;
