import { Button } from "./components/Button/Button";
import { CodeEditor } from "./components/Editor/Editor";
import { Settings } from "./components/HeaderAndSettings/Settings";
import { Result } from "./components/Result/Result";
import './App.css';

function App() {
	return (
		<div className="App">
			<Settings />
			<CodeEditor />
			<Button />
			<Result />
		</div>
	);
}

export default App;
