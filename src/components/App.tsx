import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers/index';

interface AppProps {
    todos: Todo[];
    fetchTodos(): Function;
    deleteTodo: typeof deleteTodo;
}

const mapStateToProps = ({
    todos,
}: StoreState): {
    todos: Todo[];
} => {
    return {
        todos: todos,
    };
};

interface AppState {
    fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);

        this.state = {
            fetching: false,
        };
    }

    componentDidUpdate(prevState: StoreState): void {
        if (prevState.todos !== this.props.todos) {
            this.setState({ fetching: false });
        }
    }

    public onButtonClick(): void {
        this.props.fetchTodos();
        this.setState({
            fetching: true,
        });
    }

    public onTodoClick(id: number): void {
        this.props.deleteTodo(id);
    }

    public renderList(): JSX.Element[] {
        return this.props.todos.map((todo) => {
            return (
                <div key={todo.id} onClick={() => this.onTodoClick(todo.id)}>
                    {todo.title}
                </div>
            );
        });
    }

    public render() {
        return (
            <div>
                <button onClick={this.onButtonClick.bind(this)}>Fetch</button>
                {this.state.fetching ? 'LOADING...' : null}
                {this.renderList()}
            </div>
        );
    }
}

export const App = connect(mapStateToProps, {
    fetchTodos,
    deleteTodo,
})(_App);
