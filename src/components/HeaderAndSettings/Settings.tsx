import { useStore } from "../../Store";
import s from './Settings.module.css'

const languages = [
	{ name: "JavaScript", value: "javascript" },
	{ name: "Python", value: "python" },
];

export const Settings = () => {
	const { setLanguage, executionMode, setExecutionMode } = useStore();

	return (
		<div className={s.container}>
			<h1>Редактор кода</h1>
			<div>
				<div>
					<label htmlFor="language">Выбрать язык: </label>
					<select id="language" onChange={(e) => setLanguage(e.currentTarget.value)}>
						{languages.map((langName) => {
							return (
								<option value={langName.value} key={langName.name}>
									{langName.name}
								</option>
							);
						})}
					</select>
				</div>
				<div>
					<label htmlFor="result">Выбрать какой будет результат: </label>
					<select
						id="result"
						value={executionMode}
						onChange={(e) => setExecutionMode(e.target.value)}
					>
						<option value="success">Успех</option>
						<option value="error">Ошибка</option>
					</select>
				</div>
			</div>
		</div>
	);
};
