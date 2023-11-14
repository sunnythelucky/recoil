import { useState } from "react";
import { useRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";
import { todoState } from "../state/atoms/TodoState";
import Todo from "./Todo";

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
			setTodos((prevTodos: Todo[]) => [...prevTodos, { id: uuidv4(), text: inputText }]);
			setInputText("");
		} else {
			alert("Hey type todo first dude!");
		}
	};

	const clearTodos = () => {
		setTodos([]);
	};

	return (
		<main className="flex flex-col gap-2">
			<div className="flex flex-row gap-2">
				<input
					className="border-2 rounded"
					type="text"
					name="todo"
					id="todoInput"
					value={inputText}
					onChange={handleInputChange}
				/>
				<button className="bg-black text-white" onClick={addTodo}>
					Add Todo
				</button>
				<button className="bg-black text-white" onClick={clearTodos}>
					Clear Todos
				</button>
			</div>
			<ul className="flex flex-col gap-2">
				{todos.map((todo: Todo) => {
					return (
						<li className="gap-2" key={todo.id}>
							<Todo text={todo.text} id={todo.id} />
						</li>
					);
				})}
			</ul>
		</main>
	);
}
