import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import Index from "./pages/index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./layout/Layout";
import AuthLayout from "./layout/AuthLayout";
import AppLayout from "./layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Team from "./pages/Team";
import Billing from "./pages/Billing";
import Settings from "./pages/Settings";
import Calendar from "./pages/Calendar";
import Resources from "./pages/Resources";
import Tracking from "./pages/Tracking";
import Profile from "./pages/Profile";
import SearchResults from "./pages/searchResults";

const AuthenticatedRoute = ({ children, ...rest }) => {
  return (
    <Routes>
      <Route {...rest} element={<Layout>{children}</Layout>}></Route>;
    </Routes>
  );
};

const AppRouteLayout = ({ children, ...rest }) => {
  return (
    <Routes>
      <Route {...rest} element={<AppLayout>{children}</AppLayout>}></Route>;
    </Routes>
  );
};

const LoginLayout = ({ children, ...rest }) => {
  return (
    <Routes>
      <Route
        {...rest}
        element={
          <AuthLayout
            title="Sign in to account"
            subtitle={
              <>
                Don’t have an account?{" "}
                <Link to="/register" className="text-cyan-600">
                  Sign up
                </Link>{" "}
                for a free trial.
              </>
            }
          >
            {children}
          </AuthLayout>
        }
      ></Route>
      ;
    </Routes>
  );
};

const RegisterLayout = ({ children, ...rest }) => {
  return (
    <Routes>
      <Route
        {...rest}
        element={
          <AuthLayout
            title="Sign up for an account"
            subtitle={
              <>
                Already registered?{" "}
                <Link to="/login" className="text-cyan-600">
                  Sign in
                </Link>{" "}
                to your account.
              </>
            }
          >
            {children}
          </AuthLayout>
        }
      ></Route>
      ;
    </Routes>
  );
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <LoginLayout path="/login">
        <Login />
      </LoginLayout>
      <RegisterLayout path="/register">
        <Register />
      </RegisterLayout>
      <AppRouteLayout path="/dashboard">
        <Dashboard />
      </AppRouteLayout>
      <AppRouteLayout path="/team">
        <Team />
      </AppRouteLayout>
      <AppRouteLayout path="/billing">
        <Billing />
      </AppRouteLayout>
      <AppRouteLayout path="/calendar">
        <Calendar />
      </AppRouteLayout>
      <AppRouteLayout path="/resources">
        <Resources />
      </AppRouteLayout>
      <AppRouteLayout path="/tracking">
        <Tracking />
      </AppRouteLayout>
      <AppRouteLayout path="/profile">
        <Profile />
      </AppRouteLayout>
      <AppRouteLayout path="/settings">
        <Settings />
      </AppRouteLayout>
      <AppRouteLayout path="/search">
        <SearchResults />{" "}
      </AppRouteLayout>
      <AuthenticatedRoute path="/">
        <Index />
      </AuthenticatedRoute>
    </BrowserRouter>
  );
};

export default AppRoutes;
