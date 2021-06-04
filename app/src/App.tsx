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
import {TestComponent} from './TestPage';

// function aHook(){
//     let a, b, c;
//     const [item, setItem] = React.useState({})
//     React.useEffect(function(){
//         document.body.addEventListener(...);
//         return () => document.body.removeEventListener(...);
//     }, [a,b,c]);
// }


class Routes extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (

            <div>
                <NavBarTop />
                <Router>
                    <div>
                        <Switch>
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