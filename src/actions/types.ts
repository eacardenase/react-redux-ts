import { DeleteTodoAction, FetchTodoAction } from './todos';

export enum ActionTypes {
    FETCH_TODOS,
    DELETE_TODO,
}

export type Action = FetchTodoAction | DeleteTodoAction;
