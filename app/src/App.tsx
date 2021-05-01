import * as React from 'react';
import { render } from 'react-dom';
import MainPage from './MainPage';
import NavBarTop from './layout/Navbar-top'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import TestPage from './TestPage';

class Routes extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (

            <div>
                <Router>
                <NavBarTop />
                    <div>
                        <Switch>
                            <Route path="/test" component={TestPage}/>
                            <Route path="/" component={MainPage}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}
const App = () => (<Routes />)
render([<Routes />], document.getElementById('main'));

export default Routes