import React from 'react';
const Login = React.lazy(() => import('../pages/Auth/Login/Login'));
import InsideLayout from "../ui/layout/InsideLayout";
import OutsideLayout from "../ui/layout/OutsideLayout";
import Dashboard from "../pages/Dashboard/Dashboard.jsx";
import ForgotPassword from "../pages/Auth/ForgotPassword/ForgotPassword.jsx";
import CookedSlips from '../pages/CookedSlips/CookedSlips.jsx';
import RequestPrediction from '../pages/RequestPrediction/RequestPrediction.jsx';
import MyPrediction from '../pages/MyPrediction/MyPrediction.jsx';
import Statistics from '../hooks/Statistics/Statistics.jsx';
import TeamComparisions from '../pages/TeamComparisions/TeamComparisions.jsx';
import UFFAChampions from '../pages/UFFAChampions/UFFAChampions.jsx';
import PremierLeague from '../pages/PremierLeague/PremierLeague.jsx';
import LaLiga from '../pages/LaLiga/LaLiga.jsx';
import SerieA from '../pages/SerieA/SerieA.jsx';
import Ligue from '../pages/Ligue/Ligue.jsx';

const allRoutes = [
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
    path: '/',
    element: <InsideLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
    ],
  },
  {
    path: '/cooked-slips',
    element: <InsideLayout />,
    children: [
      {
        index: true,
        element: <CookedSlips />
      },
    ],
  },
  {
    path: '/request-prediction',
    element: <InsideLayout />,
    children: [
      {
        index: true,
        element: <RequestPrediction />
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
    path: '/team-comparisions',
    element: <InsideLayout />,
    children: [
      {
        index: true,
        element: <TeamComparisions />
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
    path: '*',
    element: 'Outside page not found',
  },
];
export default allRoutes;