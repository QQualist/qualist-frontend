import { Routes, Route } from "react-router-dom";
import {
  Checklists,
  Dashboard,
  SignIn,
  SignUp,
  Items,
  Priorities,
  Home,
  Departaments,
  Responsibles
} from "../views";
import { BrowserRouter } from "react-router-dom";
import PrivateRoutes from "./privateRoutes";

const RouteNavigators = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />

        <Route path="/" element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/checklists" element={<Checklists />} />
          <Route path="/checklist/:checklistUuid/items" element={<Items />} />
          <Route path="/priorities" element={<Priorities />} />
          <Route path="/departaments" element={<Departaments />} />
          <Route path="/departaments/:departamentUuid/responsibles" element={<Responsibles />} />
        </Route>

        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default RouteNavigators;
