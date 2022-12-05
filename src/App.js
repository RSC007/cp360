import { Route, Routes } from "react-router-dom";

import Layout from "./Components/Common/Layout";
import PrivateRoute from "./Components/Common/PrivateRoute";
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<PrivateRoute Compenent={Home} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
