import * as React from 'react';
import NavBarTop from './layout/Navbar-top';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TestPage from './TestPage';


type MyProps = { value: any };
type MyState = { value: string, count: number };
export default class MainPage extends React.Component<MyProps, MyState> {
  constructor(props) {
    super(props);
    this.state = { value: '', count: 0 };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Le nom a été soumis : ' + this.state.value);
    event.preventDefault();
  }
  increment = () => {
    this.setState({
      count: (this.state.count + 1)
    });
  };

  decrement = () => {
    this.setState({
      count: (this.state.count - 1)
    });
  };


  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <label>your name is : {this.state.value} </label>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }
}