import { useState } from "react";
import { todoState } from "../state/atoms/TodoState";
import { useRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";

export type Todo = {
	id: string;
	text: string;
};

export default function Todos() {
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useRecoilState(todoState);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputText(event.target.value);
	};

	const addTodo = () => {
		if (inputText.length > 0) {
			setTodos([...todos, { id: uuidv4(), text: inputText }]);
			setInputText("");
		} else {
			alert("Hey type todo first dude!");
		}
	};

	const clearTodos = () => {
		setTodos([]);
	};

	return (
		<main>
			<input type="text" name="todo" id="todoInput" value={inputText} onChange={handleInputChange} />
			<button onClick={addTodo}>Add Todo</button>
			<button onClick={clearTodos}>Clear Todos</button>
			{todos.map((todo: Todo) => {
				return (
					<ul>
						<li key={todo.id}>{todo.text}</li>
					</ul>
				);
			})}
		</main>
	);
}
