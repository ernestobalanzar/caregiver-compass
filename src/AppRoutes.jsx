import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import AuthLayout from "./layout/AuthLayout";
import AppLayout from "./layout/AppLayout";
import InnerAppLayout from "./layout/InnerAppLayout";

import Index from "./pages/index";
import Login from "./pages/login";
import Register from "./pages/register";
import Layout from "./layout/Layout";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Team from "./pages/team";
import Billing from "./pages/billing";
import Settings from "./pages/settings";
import Events from "./pages/calendar";
import Resources from "./pages/resources";
import Tracking from "./pages/tracking";
import Profile from "./pages/profile";
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

const InnerAppRouteLayout = ({ children, ...rest }) => {
  return (
    <Routes>
      <Route
        {...rest}
        element={
          <AppLayout>
            <InnerAppLayout>{children}</InnerAppLayout>
          </AppLayout>
        }
      ></Route>
      ;
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
      <InnerAppRouteLayout path="/home">
        <Home />
      </InnerAppRouteLayout>
      <InnerAppRouteLayout path="/team">
        <Team />
      </InnerAppRouteLayout>
      <InnerAppRouteLayout path="/calendar">
        <Events />
      </InnerAppRouteLayout>
      <InnerAppRouteLayout path="/resources">
        <Resources />
      </InnerAppRouteLayout>
      <AppRouteLayout path="/billing">
        <Billing />
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
