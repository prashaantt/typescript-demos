export enum ActionType {
    AddTodo,
    ToggleTodo,
    SetVisibilityFilter
}

export enum VisibilityFilter {
    ShowAll,
    ShowCompleted,
    ShowActive
}

export interface ITodo {
    id: number;
    completed: boolean;
    text: string;
}

export interface IState {
    todos: ITodo[];
    visibilityFilter: VisibilityFilter;
}

export interface IAction {
    type: ActionType;
}
