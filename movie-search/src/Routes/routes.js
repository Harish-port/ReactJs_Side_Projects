import { BrowserRouter, Routes, Route, createBrowserRouter } from "react-router-dom";
import CoinDetail from "../Components/CoinDetail/CoinDetail";

function RouterFile() {
   
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="coin" element={<CoinDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RouterFile;
