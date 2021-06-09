import "./App.css";
import Home from "./components/Home/Home";
import SelectOption from "./components/SelectOption/SelectOption";
import TableFeed from "./components/TableFeed/TableFeed";

function App() {
  return (
    <div className="App"> 
      <Home />
      <SelectOption/>
      <TableFeed/>
    </div>
  );
}

export default App;
