import "./App.css";
import Todos from "./components/Todos";
import { totalTodos } from "./state/selectors/TotalTodos";
import { useRecoilValue } from "recoil";

function App() {
	const totalTodoState = useRecoilValue(totalTodos);
	return (
		<div className="App">
			<div>Total todos : {totalTodoState} </div>
			<Todos />
		</div>
	);
}

export default App;
