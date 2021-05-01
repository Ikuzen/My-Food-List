import * as React from 'react';
type MyProps = { value: any};
type MyState = { value: string, count: number };
export default class MainPage extends React.Component<MyProps, MyState> {
  constructor(props) {
    super(props);
    this.state = {value: '', count:0};
  }


  render () {
    return (
      <div>
          <h1>Just a test page</h1>
      </div>
    );
  }
}