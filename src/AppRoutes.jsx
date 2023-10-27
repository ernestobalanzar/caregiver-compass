import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import AuthLayout from "./layout/AuthLayout";
import AppLayout from "./layout/AppLayout";
import InnerAppLayout from "./layout/InnerAppLayout";
import GeneralAdminLayout from "./layout/GeneralAdmin/GeneralAdminLayout";

import Index from "./pages/index";
import Login from "./pages/login";
import Register from "./pages/register";
import Layout from "./layout/Layout";
import Home from "./pages/home";
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
import Dashboard from "./pages/GeneralAdmin/dashboard";
import Conditions from "./pages/GeneralAdmin/Conditions";
import Institution from "./pages/GeneralAdmin/Institution";
import DetailsInstitutions from "./pages/GeneralAdmin/DetailsInstitutions";
import ServiceProviders from "./pages/GeneralAdmin/ServiceProviders";
import LocalResources from "./pages/GeneralAdmin/LocalResources";
import SupportTickets from "./pages/GeneralAdmin/SupportTickets";
import Users from "./pages/GeneralAdmin/Users";
import InstitutionAdminBenefits from "./pages/GeneralAdmin/InstitutionAdminBenefits";
import LocalResourcesAdminBenefits from "./pages/GeneralAdmin/LocalResourcesAdminBenefits";
import DetailsBenefit from "./pages/detailsBenefit";

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

const AppGeneralAdminRouteLayout = ({ children, ...rest }) => {
  return (
    <Routes>
      <Route
        {...rest}
        element={<GeneralAdminLayout>{children}</GeneralAdminLayout>}
      ></Route>
      ;
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
        <SearchResults />
      </AppRouteLayout>
      <AppRouteLayout path="/detailsbenefit">
        <DetailsBenefit />
      </AppRouteLayout>
      <AppGeneralAdminRouteLayout path="/dashboard">
        <Dashboard title="Dashboard" />
      </AppGeneralAdminRouteLayout>
      <AppGeneralAdminRouteLayout path="/conditions">
        <Conditions title="Illnesses and Conditions" />
      </AppGeneralAdminRouteLayout>
      <AppGeneralAdminRouteLayout path="/institutions">
        <Institution title="Institutions" />
      </AppGeneralAdminRouteLayout>
      <AppGeneralAdminRouteLayout path="/institutiondetails/:id">
        <DetailsInstitutions title="Details Institution" />
      </AppGeneralAdminRouteLayout>
      <AppGeneralAdminRouteLayout path="/serviceproviders">
        <ServiceProviders title="Service Providers" />
      </AppGeneralAdminRouteLayout>
      <AppGeneralAdminRouteLayout path="/localresources">
        <LocalResources title="Local Resources" />
      </AppGeneralAdminRouteLayout>
      <AppGeneralAdminRouteLayout path="/support">
        <SupportTickets title="Support Tickets" />
      </AppGeneralAdminRouteLayout>
      <AppGeneralAdminRouteLayout path="/users">
        <Users title="Users" />
      </AppGeneralAdminRouteLayout>
      <AppGeneralAdminRouteLayout path="/institutionbenefits/:ID_category">
        <InstitutionAdminBenefits title="Institution Benefits" />
      </AppGeneralAdminRouteLayout>
      <AppGeneralAdminRouteLayout path="/localresourcesbenefits/:ID_category">
        <LocalResourcesAdminBenefits title="Local Resources Benefits" />
      </AppGeneralAdminRouteLayout>
      <AuthenticatedRoute path="/">
        <Index />
      </AuthenticatedRoute>
    </BrowserRouter>
  );
};

export default AppRoutes;
