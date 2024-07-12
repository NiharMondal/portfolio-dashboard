import { Navigate } from "react-router-dom";
import React from "react";
import { tokenHelper } from "../utils/helper";
import { tokenName } from "../utils/constant";

export default function ProtectedRoute({
	children,
}: {
	children: React.ReactNode;
}) {
	const token = tokenHelper.getToken(tokenName);

	return token ? children : <Navigate to="/login" />;
}
