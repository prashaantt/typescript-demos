import { ActionType, IAction, ITodo } from "./interfaces";

export const todo = (state = {} as ITodo, action: IAction & ITodo): ITodo => {
    switch (action.type) {
        case ActionType.AddTodo:
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case ActionType.ToggleTodo:
            if (state.id !== action.id) {
                return state;
            }

            return { ...state, completed: !state.completed };
        default:
            return state;
    }
};
