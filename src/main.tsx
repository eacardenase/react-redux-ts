import React from 'react';
import ReactDOM from 'react-dom/client';

interface AppProps {
    color?: string;
}

class App extends React.Component<AppProps> {
    public state = { counter: 0 };

    public onIncrement(): void {
        this.setState({
            counter: this.state.counter + 1,
        });
    }

    public onDecrement(): void {
        this.setState({
            counter: this.state.counter - 1,
        });
    }

    render() {
        return (
            <>
                <button onClick={this.onIncrement.bind(this)}>Increment</button>
                <button onClick={this.onDecrement.bind(this)}>Decrement</button>
                {this.state.counter}
            </>
        );
    }
}

let root = ReactDOM.createRoot(document.querySelector('#root')!);
root.render(<App color="red" />);
