import { ITodo, IAction, ActionType } from "./interfaces";
import { todo } from "./todo-reducers";

const todos = (state = [] as ITodo[], action: IAction & ITodo): ITodo[] => {
    switch (action.type) {
        case ActionType.AddTodo:
            return [...state, todo(undefined, action)];
        case ActionType.ToggleTodo:
            return state.map(td => todo(td, action));
        default:
            return state;
    }
}
