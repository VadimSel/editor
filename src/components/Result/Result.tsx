import { useStore } from "../../Store";

export const Result = () => {
	const { result } = useStore();

	return (
		<div>
			<span>Результат: </span>
			{result ? (
				result.status === "success" ? (
					<span>{result.output}</span>
				) : (
					<span>{result.output}</span>
				)
			) : (
				"Загрузка"
			)}
		</div>
	);
};
