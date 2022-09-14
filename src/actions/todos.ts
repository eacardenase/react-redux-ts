import axios from 'axios';
import { Dispatch } from 'redux';

import { ActionTypes } from './types';

const URL = 'https://jsonplaceholder.typicode.com/todos';

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export interface FetchTodoAction {
    type: ActionTypes.FETCH_TODOS;
    payload: Todo[];
}

export interface DeleteTodoAction {
    type: ActionTypes.DELETE_TODO;
    payload: number;
}

export const fetchTodos = (): Function => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<Todo[]>(URL);

        dispatch<FetchTodoAction>({
            type: ActionTypes.FETCH_TODOS,
            payload: response.data,
        });
    };
};

export const deleteTodo = (id: number): DeleteTodoAction => {
    return {
        type: ActionTypes.DELETE_TODO,
        payload: id,
    };
};
