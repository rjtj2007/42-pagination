import React {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        return <Fragment>
           <h2>App</h2>
           <p>Here's my app</p>
        </Fragment>
    }
}

let root = document.getElementById('root');
ReactDOM.render(<App />, root);