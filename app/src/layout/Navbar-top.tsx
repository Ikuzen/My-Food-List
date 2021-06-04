import * as React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import MainPage from './../MainPage'
import { TestComponent } from './../TestPage'
import './Navbar-top.scss';
import SimpleMenu from "./../components/menu-component";
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
            <div>
                <SimpleMenu />
            </div>
        );
    }
    // render() {
    //     return (
    //         <div className="main-container">
    //             <Router>
    //                 <Switch>
    //                     <Route path="/test" component={TestComponent} />
    //                 </Switch>
    //                 <nav>
    //                     <button>
    //                         <Link to="/">Home</Link>
    //                     </button>
    //                     <button>
    //                         <Link to="/test">test</Link>
    //                     </button>
    //                 </nav>
    //             </Router>
    //         </div>
    //     );
    // }
}