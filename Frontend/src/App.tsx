import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
