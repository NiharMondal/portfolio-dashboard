import { Outlet } from "react-router-dom";
import { RiMenu2Fill } from "@remixicon/react";
import { Link } from "react-router-dom";
const navLinks = ["Blog", "Project", "Experience", "Skills"];

export default function Dashboard() {
	return (
		<div className="drawer lg:drawer-open">
			<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

			<div className="drawer-side z-10">
				<label
					htmlFor="my-drawer-2"
					aria-label="close sidebar"
					className="drawer-overlay"
				></label>
				<div className="menu min-h-full bg-base-200 w-80 p-4">
					<div className="text-center pt-10 md:pt-0">Logo</div>
					<ul className="mt-10">
						{navLinks.map((link) => (
							<Link
								key={link}
								to={`/${link.toLowerCase()}`}
								className="block py-2 pl-5 hover:bg-gray-700 rounded"
							>
								{link}
							</Link>
						))}
					</ul>
				</div>
			</div>
			<div className="drawer-content relative min-w-full">
				{/* Page content here */}
				<div className="p-4 relative">
					<Outlet />
				</div>
				<label
					htmlFor="my-drawer-2"
					className="btn drawer-button lg:hidden absolute top-2 right-0"
				>
					<RiMenu2Fill />
				</label>
			</div>
		</div>
	);
}
