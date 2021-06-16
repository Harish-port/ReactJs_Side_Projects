import "./App.css";
import Home from "./components/Home/Home";
import { useState ,useEffect} from "react";
import SelectOption from "./components/SelectOption/SelectOption";
import TableFeed from "./components/TableFeed/TableFeed";
import * as Utils from "./services/ApiHelper";
import axios from 'axios';

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
       {states.map((item, i) => {
        return <div key={i}>{item.name}</div>;
      })}
      <Home />
      <SelectOption states={states} />
      <TableFeed />
    </div>
  );
}

export default App;
