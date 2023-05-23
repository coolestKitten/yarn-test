import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Favorites, Home, NowPlaying, Popular, TopRated, MovieSelection } from "../pages";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import { ROUTES } from "./constants";

const routes: RouteObject[] = [
    {
        path: "/admin",
        element: <PrivateRouter/>,
        children: [ 
            {path: '/admin', element: <Home/>}, 
            ]
    },
    {
        path: "/",
        element: <PublicRouter/>,
        children: [ 
            {index: true, element: <Home/>},
            {path: ROUTES.POPULAR, element: <Popular />},
            {path: ROUTES.TOP_RATED, element: <TopRated />},
            {path: ROUTES.NOW_PLAYING, element: <NowPlaying />},
            {path: ROUTES.MY_FAVORITES, element: <Favorites />},
            {path: ROUTES.SHOW, element: <MovieSelection />},
        ]
        
    },
]

export const router = createBrowserRouter(routes);