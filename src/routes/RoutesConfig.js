import React from 'react';
const Login = React.lazy(() => import('../pages/Auth/Login/Login'));
import InsideLayout from "../ui/layout/InsideLayout";
import OutsideLayout from "../ui/layout/OutsideLayout";
import Dashboard from "../pages/Dashboard/Dashboard.jsx";
import ForgotPassword from "../pages/Auth/ForgotPassword/ForgotPassword.jsx";
import CookedSlips from '../pages/CookedSlips/CookedSlips.jsx';
import RequestPrediction from '../pages/RequestPrediction/RequestPrediction.jsx';
import MyPrediction from '../pages/MyPrediction/MyPrediction.jsx';
import TeamComparisions from '../pages/TeamComparisions/TeamComparisions.jsx';
import UFFAChampions from '../pages/UFFAChampions/UFFAChampions.jsx';
import PremierLeague from '../pages/PremierLeague/PremierLeague.jsx';
import LaLiga from '../pages/LaLiga/LaLiga.jsx';
import SerieA from '../pages/SerieA/SerieA.jsx';
import Ligue from '../pages/Ligue/Ligue.jsx';
import Statistics from '../pages/Statistics/Statistics.jsx';
import Settings from '../pages/Settings/Settings.jsx';
import Home from '../pages/Home/Home.jsx';
import Predictions from '../pages/Predictions/Predictions.jsx';
import Faqs from '../pages/Faqs/Faqs.jsx';
import Comparisons from '../pages/Comparisons/Comparisons.jsx';
import NewsBlog from '../pages/NewsBlog/NewsBlog.jsx';
import ChoosePlan from '../pages/ChoosePlan/ChoosePlan.jsx';
import Payment from '../pages/Payment/Payment.jsx';
import PaymentRedirect from '../pages/Payment/PaymentRedirect.jsx';
import Bundesliga from '../pages/Bundesliga/Bundesliga.jsx';
import PlayerComparisions from '../pages/PlayerComparisions/PlayerComparisions.jsx';
import RequestPredictionId from '../pages/RequestPrediction/RequestPredictionId.jsx';
import SlipInfo from '../pages/CookedSlips/SlipInfo.jsx';
import { ReferRegistrationPage } from '../pages/Home/ReferRegistrationPage.jsx';
import AboutUs from '../pages/AboutUs/AboutUs.jsx';
import DataProtectionPolicy from '../pages/DataProtectionPolicy/DataProtectionPolicy.jsx';
import RefundCancellationPolicy from '../pages/RefundCancellationPolicy/RefundCancellationPolicy.jsx';
import { Termsofservice } from '../pages/TermsOfService/Termsofservice.jsx';
import { GoogleLogin } from '@react-oauth/google';
import GoogleRedirect from '../pages/GoogleRedirect.jsx/GoogleRedirect.jsx';
import { Referral } from '../pages/Referral/Referral.jsx';
import ContactUs from '../pages/ContactUs/ContactUs.jsx';
import PaymentSuccess from '../pages/Payment/PaymentSuccess.jsx';
import PayStackPayment from '../pages/Payment/PayStackPayment.jsx';
import RegistrationPage from '../pages/Registration/RegistrationPage.jsx';


const allRoutes = [
  {
    path: '/',
    element: <OutsideLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
    ],
  },
  {
    path: '/signup',
    element: <OutsideLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'ReferRegistration/:id', element: <ReferRegistrationPage /> },
    ],
  },


  {
    path: '/terms-of-service',
    element: <OutsideLayout />,
    children: [
      { index: true, element: <Termsofservice /> },
      { path: 'terms-of-service', element: <Termsofservice /> },
    ],
  },
  {
    path: '/google-redirect',
    element: <OutsideLayout />,
    children: [
      { index: true, element: <GoogleRedirect /> },
      { path: 'terms-of-service', element: <GoogleRedirect /> },
    ],
  },
  {
    path: '/predictions',
    element: <OutsideLayout />,
    children: [
      { index: true, element: <Predictions /> },
      { path: 'predictions', element: <Predictions /> },
    ],
  },
  {
    path: '/about-us',
    element: <OutsideLayout />,
    children: [
      { index: true, element: <AboutUs /> },
      { path: 'about-us', element: <AboutUs /> },
    ],
  },
  {
    path: '/data-protection-policy',
    element: <OutsideLayout />,
    children: [
      { index: true, element: <DataProtectionPolicy /> },
      { path: 'data-protection-policy', element: <DataProtectionPolicy /> },
    ],
  },
  {
    path: '/refund-cancellation-policy',
    element: <OutsideLayout />,
    children: [
      { index: true, element: <RefundCancellationPolicy /> },
      { path: 'refund-cancellation-policy', element: <RefundCancellationPolicy /> },
    ],
  },
  {
    path: '/faqs',
    element: <OutsideLayout />,
    children: [
      { index: true, element: <Faqs /> },
      { path: 'faqs', element: < Faqs /> },
    ],
  },
  {
    path: '/contact-us',
    element: <OutsideLayout />,
    children: [
      { index: true, element: <ContactUs /> },
      { path: 'contact-us', element: < ContactUs /> },
    ],
  },
  {
    path: '/comparisons',
    element: <OutsideLayout />,
    children: [
      { index: true, element: <Comparisons /> },
      { path: 'comparisons', element: < Comparisons /> },
    ],
  },
  {
    path: '/news-blog',
    element: <OutsideLayout />,
    children: [
      { index: true, element: <NewsBlog /> },
      { path: 'news-blog', element: < NewsBlog /> },
    ],
  },
  {
    path: '/choose-plan',
    element: <OutsideLayout />,
    children: [
      { index: true, element: <ChoosePlan /> },
      { path: 'choose-plan', element: < ChoosePlan /> },
    ],
  },
  {
    path: '/payment',
    element: <OutsideLayout />,
    children: [
      { index: true, element: <Payment /> },
      { path: 'choose-plan', element: < Payment /> },
    ],
  },
  {
    path: '/payment-redirect',
    element: <OutsideLayout />,
    children: [
      { index: true, element: <PaymentRedirect /> },
      { path: 'payment-redirect', element: < PaymentRedirect /> },
    ],
  },

  {
    path: '/sign-up',
    element: <OutsideLayout />,
    children: [
      { index: true, element: <RegistrationPage /> },
      { path: 'sign-up', element: < RegistrationPage /> },
    ],
  },
  {
    path: '/payment-success',
    element: <OutsideLayout />,
    children: [
      { index: true, element: <PaymentSuccess /> },
      { path: 'payment-success', element: < PaymentSuccess /> },
    ],
  },
  {
    path: '/login',
    element: <OutsideLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: 'login', element: <Login /> },
    ],
  },
  {
    path: '/forgot-password',
    element: <OutsideLayout />,
    children: [
      { index: true, element: <ForgotPassword /> },
      { path: 'forgot-password', element: <ForgotPassword /> },
    ],
  },

  {
    path: '/forgot-password',
    element: <OutsideLayout />,
    children: [
      { index: true, element: <ForgotPassword /> },
      { path: 'forgot-password', element: <ForgotPassword /> },
    ],
  },
  {
    path: '/dashboard',
    element: <InsideLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
    ],
  },
  {
    path: '/dashboard/:id',
    element: <InsideLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
    ],
  },
  {
    path: '/referral',
    element: <InsideLayout />,
    children: [
      {
        index: true,
        element: <Referral />
      },
    ],
  },
  {
    path: '/coped-slips',
    element: <InsideLayout />,
    children: [
      {
        index: true,
        element: <CookedSlips />
      },
    ],
  },
  {
    path: '/slip-info',
    element: <InsideLayout />,
    children: [
      {
        index: true,
        element: <SlipInfo />
      },
    ],
  },
  {
    path: '/match-prediction',
    element: <InsideLayout />,
    children: [
      {
        index: true,
        element: <RequestPrediction />
      },
    ],
  },
  {
    path: '/match-prediction/:rid',
    element: <InsideLayout />,
    children: [
      {
        index: true,
        element: <RequestPredictionId />
      },
    ],
  },
  {
    path: '/my-prediction',
    element: <InsideLayout />,
    children: [
      {
        index: true,
        element: <MyPrediction />
      },
    ],
  },
  {
    path: '/statistics',
    element: <InsideLayout />,
    children: [
      {
        index: true,
        element: <Statistics />
      },
    ],
  },
  {
    path: '/stats-comparisions',
    element: <InsideLayout />,
    children: [
      {
        index: true,
        element: <TeamComparisions />
      },
    ],
  },
  {
    path: '/player-comparisions',
    element: <InsideLayout />,
    children: [
      {
        index: true,
        element: <PlayerComparisions />
      },
    ],
  },
  {
    path: '/uffa-champions',
    element: <InsideLayout />,
    children: [
      {
        index: true,
        element: <UFFAChampions />
      },
    ],
  },
  {
    path: '/premier-league',
    element: <InsideLayout />,
    children: [
      {
        index: true,
        element: <PremierLeague />
      },
    ],
  },
  {
    path: '/la-liga',
    element: <InsideLayout />,
    children: [
      {
        index: true,
        element: <LaLiga />
      },
    ],
  },
  {
    path: '/serie-a',
    element: <InsideLayout />,
    children: [
      {
        index: true,
        element: <SerieA />
      },
    ],
  },
  {
    path: '/bundesliga',
    element: <InsideLayout />,
    children: [
      {
        index: true,
        element: <Bundesliga />
      },
    ],
  },
  {
    path: '/ligue',
    element: <InsideLayout />,
    children: [
      {
        index: true,
        element: <Ligue />
      },
    ],
  },
  {
    path: '/settings',
    element: <InsideLayout />,
    children: [
      {
        index: true,
        element: <Settings />
      },
    ],
  },
  {
    path: '*',
    element: 'Outside page not found',
  },
];
export default allRoutes;