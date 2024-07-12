import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "./layout/Dashboard";
import NotFound from "./pages/NotFound";
import { Blog, Experience, Login, Project, Skills } from "./pages";
import ProtectedRoute from "./layout/ProtectedRoute";

export const router = createBrowserRouter([
	{
		path: "/dashboard",
		element: (
			<ProtectedRoute>
				<Dashboard />
			</ProtectedRoute>
		),
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
	{
		path: "/login",
		element: <Login />,
	},
	
	{ path: "/", element: <Navigate to={"/login"} replace={true} /> },

	{ path: "*", element: <NotFound /> },
	{ path: "*", element: <Navigate to={"/not-found"} replace={true} /> },
]);
