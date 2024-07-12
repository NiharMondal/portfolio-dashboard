import React, { useEffect, useRef, useState } from "react";
import { useUpdateSkillMutation } from "../../redux/api/skillApi";
type GeneralModalProps = {
	children: React.ReactNode;
	id: string;
	value: string;
};
export default function GeneralModal({
	children,
	id,
	value,
}: GeneralModalProps) {
	const generalModal = useRef<HTMLDialogElement>(null);
	const [updateSkill] = useUpdateSkillMutation();
	const [skillValue, setSkillValue] = useState("");

	const data = {
		name: skillValue,
	};
	const handleEdit = async (id: string) => {
		try {
			const res = await updateSkill({ data, id }).unwrap();
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		setSkillValue(value);
	}, [value]);

	return (
		<div>
			<span onClick={() => generalModal.current?.showModal()}>
				{children}
			</span>
			<dialog ref={generalModal} id="my_modal_2" className="modal">
				<div className="modal-box">
					<div className="mt-2 flex gap-x-2">
						<input
							defaultValue={value}
							onChange={(e) => setSkillValue(e.target.value)}
							type="text"
							placeholder="Skill name"
							className="input input-bordered "
						/>
						<button
							onClick={() => handleEdit(id)}
							className="btn text-white font-bold text-lg"
						>
							Update skill
						</button>
					</div>
				</div>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
		</div>
	);
}
