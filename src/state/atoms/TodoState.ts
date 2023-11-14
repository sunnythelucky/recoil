import { atom } from "recoil";
import { Todo } from "../../components/Todos";

export const todoState = atom({
	key: "todoState",
	default: [] as Todo[],
});
