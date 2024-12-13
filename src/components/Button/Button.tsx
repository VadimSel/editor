import { useStore } from "../../Store";
import s from './Button.module.css'

export const Button = () => {
	const { isLoading, setIsLoading, executionMode, setResult, code } = useStore();

	const handleRun = async () => {
		setIsLoading(true);
		setResult(null);

		setTimeout(() => {
			if (executionMode === "error" || code === "") {
				setResult({ status: "error", output: "SyntaxError: Unexpected token" });
			} else {
				setResult({
					status: "success",
					output: "Ведённый код: " + code,
				});
			}
			setIsLoading(false);
		}, 1000);
	};

	return (
		<div className={s.button}>
			<button
				onClick={handleRun}
			>
				{isLoading ? "Running..." : "Run"}
			</button>
		</div>
	);
};
