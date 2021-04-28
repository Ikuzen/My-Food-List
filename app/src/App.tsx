import * as React from 'react';
import { render } from 'react-dom';

import Counter from './Counter';
class Body extends React.Component{
    state = {
        title : "Hello world"
    }

    render(){
        return(
            <h1>{this.state.title}</h1>
        )
    }
}
render([<Body /> ,<Counter />], document.getElementById('main'));
