import { SubmitHandler, useForm } from "react-hook-form";
import { TLoginCredentials } from "../types";
import { useLoginMutation } from "../redux/api/authApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { tokenHelper } from "../utils/helper";
import { tokenName } from "../utils/constant";
import { useEffect } from "react";

export default function Login() {
	const token = tokenHelper.getToken(tokenName);
	const route = useNavigate();
	const { register, handleSubmit, reset } = useForm<TLoginCredentials>();
	const [login] = useLoginMutation();

	const onSubmit: SubmitHandler<TLoginCredentials> = async (formValue) => {
		try {
			const response = await login(formValue).unwrap();

			if (response.success) {
				reset();
				tokenHelper.setToken(tokenName, response.data.token);
				toast.success("Logged in successfully");
				route("/dashboard");
			}
		} catch (error: any) {
			toast.error(error.data.message);
		}
	};

	useEffect(() => {
		if (token) {
			route("/dashboard");
		}
	}, []);
	return (
		<section className="min-h-screen flex items-center justify-center p-3 md:p-0">
			<div className="space-y-6 p-10  shadow-2xl bg-slate-800 rounded-2xl">
				<div className="text-center ">
					<p>Hey, Super Admin 🙋‍♂️</p>
					<h1>Login to your account 😊</h1>
				</div>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="space-y-3  rounded-md w-full md:max-w-[600px]"
				>
					<input
						{...register("email", { required: true })}
						type="email"
						placeholder="Enter a valid email address"
						className="input input-bordered w-full"
					/>
					<input
						{...register("password", { required: true })}
						type="password"
						placeholder="Enter your password"
						className="input input-bordered w-full"
					/>
					<button
						type="submit"
						className="btn btn-primary text-gray-200 tracking-wide text-lg"
					>
						Login
					</button>
				</form>
			</div>
		</section>
	);
}
