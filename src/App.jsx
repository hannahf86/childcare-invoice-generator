import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// TOAST
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// SCENES
import Dashboard, { dashboardLoader, dashboardAction } from "./Scenes/Dashboard";
import Error from "./Scenes/Error";
import Main, { mainLoader } from "./Layouts/main";

// ACTIONS
import { logoutAction } from "./Actions/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ]
  },
]);

function App() {
  return <div className="App">
    <RouterProvider router={router} />
    <ToastContainer />
  </div>;
}

export default App;