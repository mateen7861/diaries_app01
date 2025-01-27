import React, { FC, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../rootReducer";

const Auth = lazy(() => import("../features/auth/Auth"));
const Home = lazy(() => import("../features/home/Home"));

const App: FC = () => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              {isLoggedIn ? <Home /> : <Auth />}
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
