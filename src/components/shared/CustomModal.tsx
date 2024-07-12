import React from "react";
type Props = {
	children: React.ReactNode;
	btn_name: string;
	modalRef: React.RefObject<HTMLDialogElement>;
};
export default function CustomModal({
	children,
	btn_name,
	modalRef
}:Props) {
	
	return (
		<>
			<button
				className="btn btn-success text-white"
				onClick={() => modalRef.current?.showModal()}
			>
				{btn_name}
			</button>
			<dialog id="my_modal_4" className="modal" ref={modalRef}>
				<div className="modal-box w-11/12 max-w-5xl">
					<div className="mt-16">{children}</div>

					<div className="modal-action">
						<form method="dialog">
							<button className="btn absolute top-4 right-4">
								Close
							</button>
						</form>
					</div>
				</div>
			</dialog>
		</>
	);
}
