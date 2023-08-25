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
import OneOnOne from "./pages/oneOnOne";
import Training from "./pages/training";
import ChatBotCompass from "./pages/chatBot";
import MarketPlace from "./pages/MarketPlace";
import Docs from "./pages/docs";
import GeneralResourcesForm from "./pages/GeneralResourcesForm";
import Help from "./pages/help";
import Feedback from "./pages/feedback";
import LegalFinance from "./pages/legal-finance";
import LocalHealthcareService from "./pages/localHealthcareService";

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
      <InnerAppRouteLayout path="/oneonone">
        <OneOnOne />
      </InnerAppRouteLayout>
      <InnerAppRouteLayout path="/training">
        <Training />
      </InnerAppRouteLayout>
      <InnerAppRouteLayout path="/bot">
        <ChatBotCompass />
      </InnerAppRouteLayout>
      <InnerAppRouteLayout path="/marketplace">
        <MarketPlace />
      </InnerAppRouteLayout>
      <InnerAppRouteLayout path="/docs">
        <Docs />
      </InnerAppRouteLayout>
      <InnerAppRouteLayout path="/generalresourcesform">
        <GeneralResourcesForm />
      </InnerAppRouteLayout>
      <InnerAppRouteLayout path="/localhealthcareservice">
        <LocalHealthcareService />
      </InnerAppRouteLayout>
      <InnerAppRouteLayout path="/legalfinance">
        <LegalFinance />
      </InnerAppRouteLayout>
      <AppRouteLayout path="/billing">
        <Billing />
      </AppRouteLayout>
      <AppRouteLayout path="/help">
        <Help />
      </AppRouteLayout>
      <AppRouteLayout path="/feedback">
        <Feedback />
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
