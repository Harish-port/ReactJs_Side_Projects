import "./App.css";
import { useState ,useEffect} from "react";
import { Home,SelectOption,TableFeed } from "./components";
import * as Utils from './Services/ApiHelper';

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
