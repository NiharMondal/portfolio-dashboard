

type Props = {
	children: React.ReactNode;
	btn_name: string;
	modalRef: React.RefObject<HTMLDialogElement>;
};

export default function FullModal({ children, btn_name, modalRef }: Props) {
	return (
		<>
			<button
				onClick={() => modalRef.current?.showModal()}
				className="btn btn-success text-white"
			>
				{btn_name}
			</button>
			<dialog id="my_modal_4" className="modal" ref={modalRef}>
				<div className="modal-box  min-w-full min-h-screen">
					<div className="max-w-2xl mx-auto p-5 min-h-full m-0  mt-10 ">
						{children}
					</div>
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
