import Editor from "@monaco-editor/react";
import { useStore } from "../../Store";
import s from "./Editor.module.css"

export const CodeEditor = () => {
	const { language, code, setCode } = useStore();

	return (
		<div className={s.editor}>
			<Editor
				height="300px"
				language={language}
				theme="vs-dark"
				loading="Загрузка..."
				value={code}
				onChange={(value) => setCode(value || "")}
			/>
		</div>
	);
};
