import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Detail } from "./Detail";

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </HashRouter>
  );
}

export default Router;
