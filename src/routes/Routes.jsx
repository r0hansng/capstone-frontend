import { createBrowserRouter } from "react-router-dom"
import AppLayout from "../layout/AppLayout"
import Home from "../pages/Home/Home"
import Event from "../pages/Event/Event"
import Events from "../pages/Events/Events"
import Conferences from "../pages/Conferences/Conferences"
import Workshops from "../pages/Workshops/Workshops"
import Competitions from "../pages/Competitions/Competitions"
import Login from "../pages/Login/Login"

const Routes = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/events",
                element: <Events />
            },
            {
                path: "/conferences",
                element: <Conferences />
            },
            {
                path: "/workshops",
                element: <Workshops />
            },
            {
                path: "/competitions",
                element: <Competitions />
            },
            {
                path: "/event",
                element: <Event />
            },
        ]
    }
])

export default Routes