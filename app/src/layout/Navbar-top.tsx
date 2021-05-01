import * as React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import MainPage from './../MainPage'
import TestPage from './../TestPage'

type MyProps = { value: any };
type MyState = { value: string, count: number };
export default class NavBarTop extends React.Component<MyProps, MyState> {
    constructor(props) {
        super(props);
        this.state = { value: '', count: 0 };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/test">test</Link>
                        </li>
                    </ul>
                </nav>
            </Router>
        );
    }
}