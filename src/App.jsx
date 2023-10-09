import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// SCENES
import Dashboard, { dashboardLoader } from "./Scenes/Dashboard";
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
  </div>;
}

export default App;