import React from "react";
import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AppLayout from "../components/layout/inappLayout";
import Login from "../pages/login";
import NotFound from "../pages/404";
import Dashboard from "../pages";
import StarShip from "../pages/starship";
import People from "../pages/people";
import Species from "../pages/species";
import SingleOverview from "../pages/components/singleOverview";
import SingleStarShip from "../pages/starship/components";
import SinglePerson from "../pages/people/components";
import SingleSpecies from "../pages/species/components";

function InappPrivateRoute() {
  // const { isLoggedIn, user } = useSelector((state) => state.loginReducer);
  // const isAuthed = isLoggedIn && user?.accessToken && user?.userId;
  const isAuthed = true;
  return isAuthed ? (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ) : (
    <Navigate to="/" replace={true} />
  );
}

export default function AppRoute() {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route element={<InappPrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/starship" element={<StarShip />} />
            <Route path="/people" element={<People />} />
            <Route path="/species" element={<Species />} />
            <Route
              path="/dashboard/overview/:id"
              element={<SingleOverview />}
            />

            <Route path="/starship/url/:id" element={<SingleStarShip />} />

            <Route path="/people/name/:id" element={<SinglePerson />} />

            <Route path="/species/name/:id" element={<SingleSpecies />} />
          </Route>

          <Route path="/" element={<Login />} />

          <Route path="/Not-found" element={<NotFound />} />
          <Route
            path="*"
            element={<Navigate to="/Not-found" replace={true} />}
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
