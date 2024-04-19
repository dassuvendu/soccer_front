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
    path: '/predictions',
    element: <OutsideLayout />,
    children: [
      { index: true, element: <Predictions /> },
      { path: 'predictions', element: <Predictions /> },
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