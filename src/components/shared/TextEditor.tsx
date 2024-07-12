import { useMemo } from "react";
import ReactQuill from "react-quill";

type TextEditorProps = {
	value: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
};
export default function TextEditor({ value, setValue }: TextEditorProps) {
	const modules = useMemo(
		() => ({
			toolbar: {
				container: [
					[{ header: [1, 2, 3, 4, false] }],
					["bold", "italic", "underline", "blockquote"],
					[{ color: [] }],
					[
						{ list: "ordered" },
						{ list: "bullet" },
						{ indent: "-1" },
						{ indent: "+1" },
					],
					["link", "image"],
					["clean"],
				],
			},
			clipboard: {
				matchVisual: true,
			},
		}),
		[]
	);

	const formats = [
		"header",
		"bold",
		"italic",
		"underline",
		"strike",
		"blockquote",
		"list",
		"bullet",
		"indent",
		"link",
		"image",
		"color",
		"clean",
	];
	return (
		<ReactQuill
			className="custom_style"
			value={value}
			onChange={setValue}
			modules={modules}
			formats={formats}
		/>
	);
}
