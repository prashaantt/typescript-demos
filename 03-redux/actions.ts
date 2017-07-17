import { ActionType, IAction, IState, ITodo, VisibilityFilter } from "./interfaces";

let nextTodoId = 0;

export const addTodo = (text: string): IAction & Partial<ITodo> => {
    return {
        type: ActionType.AddTodo,
        id: nextTodoId++,
        text
    };
};

export const setVisibilityFilter = (visibilityFilter: VisibilityFilter): IAction & Partial<IState> => {
    return {
        type: ActionType.SetVisibilityFilter,
        visibilityFilter
    };
};

export const toggleTodo = (id: number): IAction & Partial<ITodo> => {
    return {
        type: ActionType.ToggleTodo,
        id
    };
};
