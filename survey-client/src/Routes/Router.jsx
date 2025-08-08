import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Dashboard from "../Pages/Dashboard";
import UserDashboard from "../Pages/UserDashboard";
import Create from "../Pages/Create";
import CreateScratch from "../Pages/CreateScratch";
import CreateCopy from "../Pages/CreateCopy";
import CreateAI from "../Pages/CreateAI";
import AccountSettings from "../components/Dashboard/AccountSettings";
import ProfileSetup from "../components/Dashboard/ProfileSetup";
import ChangeEmail from "../components/Dashboard/ChangeEmail";
import TwoFactorVerification from "../components/Dashboard/TwoFactorVerification";
import ChangePassword from "../components/Dashboard/ChangePassword";
import DeleteAccount from "../components/Dashboard/DeleteAccount";
import SurveysCompleted from "../components/Dashboard/SurveysCompleted";
import EarnWithUs from "../Pages/EarnWithUs";
import PublishSurvey from "../Pages/PublishSurvey";
import Resources from "../Pages/Resources";
import HelpSupport from "../Pages/HelpSupport";
import NotFound from "../Pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "account-settings",
        element: <AccountSettings />,
      },
      {
        path: "profile-setup",
        element: <ProfileSetup />,
      },
      {
        path: "change-email",
        element: <ChangeEmail />,
      },
      {
        path: "two-factor",
        element: <TwoFactorVerification />,
      },
      {
        path: "change-password",
        element: <ChangePassword />,
      },
      {
        path: "delete-account",
        element: <DeleteAccount />,
      },
      {
        path: "surveys-completed",
        element: <SurveysCompleted />,
      },
    ],
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/earn-with-us",
        element: <EarnWithUs />,
      },
      {
        path: "/publish-survey",
        element: <PublishSurvey />,
      },
      {
        path: "/resources",
        element: <Resources />,
      },
      {
        path: "/help-support",
        element: <HelpSupport />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/user-dashboard",
        element: <UserDashboard />,
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/create/scratch",
        element: <CreateScratch />,
      },
      {
        path: "/create/copy",
        element: <CreateCopy />,
      },
      {
        path: "/create/ai",
        element: <CreateAI />,
      },
    ],
  },
]);
