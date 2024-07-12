import { toast } from "react-toastify";
import { decodeToken } from "../utils/decodeToken";
import { useNavigate } from "react-router-dom";
import { tokenHelper } from "../utils/helper";
import { tokenName } from "../utils/constant";
import avatar from '../assets/icon/small_icon.png'
export default function TopBar() {
	const router = useNavigate();
	const token = tokenHelper.getToken(tokenName);
	const data: any = decodeToken(token!);

	const handleLogout = () => {
		toast.success("Logged out successfully!");
		tokenHelper.removeToken();
		router("/login");
	};

	return (
		<nav className="flex justify-end mb-5">
			<div className="dropdown dropdown-end">
				<div tabIndex={0} role="button">
					<div className="avatar online">
						<div className="ring-primary ring-offset-base-100 size-10 rounded-full ring ring-offset-2">
							<img src={avatar} />
						</div>
					</div>
				</div>
				<div
					tabIndex={0}
					className="dropdown-content card card-compact bg-primary text-primary-content z-[1] w-64 p-2 shadow"
				>
					<div className="card-body space-y-0">
						<h3 className="font-semibold text-3xl text-gray-200">
							Welcome, {data?.name}
						</h3>
						<p className="text-gray-300 italic">
							You can manage everything you want! 😊
						</p>

						<button
							className="btn btn-warning text-gray-700"
							onClick={handleLogout}
						>
							Log out
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}
