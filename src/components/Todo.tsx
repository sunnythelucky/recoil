import { todoState } from "../state/atoms/TodoState";
import { useSetRecoilState } from "recoil";
import { Todo } from "./Todos";

type TodoProps = {
	text: string;
	id: string;
};

export default function Todo({ text, id }: TodoProps) {
	const setTodos = useSetRecoilState(todoState);

	const deleteTodo = () => {
		setTodos((prevTodos: Todo[]) => prevTodos.filter((todo) => todo.id !== id));
	};

	return (
		<div className="flex flex-row space-between gap-2">
			<p className="w-4/5">{text}</p>
			<button className="w-1/5" onClick={deleteTodo}>
				X
			</button>
		</div>
	);
}
