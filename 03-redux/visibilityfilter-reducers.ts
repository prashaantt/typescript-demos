import { ActionType, IAction, IState, VisibilityFilter } from "./interfaces";

const visibilityFilter = (state = VisibilityFilter.ShowAll, action: IAction & IState) => {
    switch (action.type) {
        case ActionType.SetVisibilityFilter:
            return action.visibilityFilter;
        default:
            return state;
    }
};
