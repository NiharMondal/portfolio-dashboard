import React from "react";
import ReactDOM from "react-dom/client";
import "react-quill/dist/quill.snow.css";
import "./index.css";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
			<ToastContainer autoClose={1000} />
		</Provider>
	</React.StrictMode>
);
