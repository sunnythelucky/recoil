import { RecoilRoot } from "recoil";
import "./App.css";
import Todos from "./components/Todos";

function App() {
	return (
		<RecoilRoot>
			<div className="App">
				<div>Hey</div>
				<Todos />
			</div>
		</RecoilRoot>
	);
}

export default App;
