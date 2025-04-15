import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from "./components/themeprovider";
import AppLayout from './layout/app-layout';
import LandingPage from './pages/landing';
import Onboarding from './pages/onboarding';
import Joblisting from './pages/joblisting';
import PostJob from './pages/postjob';
import Myjobs from './pages/myjobs';
import JobPage from './pages/jobs';
import Savedjobs from './pages/savedjobs';
import ProtectedRoute from "./components/protected";


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: (
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>
        ),
      },
      {
        path: "/jobs",
        element: (
          <ProtectedRoute>
            <Joblisting />
          </ProtectedRoute>
        ),
      },
      {
        path: "/postjob",
        element: (
          <ProtectedRoute>
            <PostJob />
          </ProtectedRoute>
        ),
      },
      {
        path: "/myjobs",
        element: (
          <ProtectedRoute>
            <Myjobs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/savedjobs",
        element: (
          <ProtectedRoute>
            <Savedjobs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/job/:id",
        element: (
          <ProtectedRoute>
            <JobPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;