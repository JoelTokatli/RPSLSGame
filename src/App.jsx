import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Main from "./routes/Main";
import Error from "./routes/Error";
import Rules from "./routes/Rules";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/main" element={<Main />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
