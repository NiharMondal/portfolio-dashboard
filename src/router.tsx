import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "./layout/Dashboard";
import NotFound from "./pages/NotFound";
import { Blog, Experience, Project, Skills } from "./pages";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Dashboard />,
		errorElement: <NotFound />,
		children: [
			{
				index: true,
				element: <Blog />,
			},
			{
				path: "blog",
				element: <Blog />,
			},
			
			{
				path: "experience",
				element: <Experience />,
			},
			{
				path: "project",
				element: <Project />,
			},
			{
				path: "skills",
				element: <Skills />,
			},
		],
	},
	{ path: "*", element: <NotFound /> },
	{ path: "*", element: <Navigate to={"/not-found"} replace={true} /> },
]);
