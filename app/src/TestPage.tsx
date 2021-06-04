import * as React from 'react';
// type MyProps = { value: any};
// type MyState = { value: string, count: number };
// export default class TestPage extends React.Component<MyProps, MyState> {
//   constructor(props) {
//     super(props);
//     this.state = {value: '', count:0};
//   }


//   render () {
//     return (
//       <div>
//           <h1>Just a test page</h1>
//       </div>
//     );
//   }
// }

export function TestComponent() {
  const [dependency, setDependency] = React.useState(0);

  React.useEffect(function() {
      console.log("add a listener for", dependency);
      return function() {
          console.log("remove a listener for", dependency)
      }
  }, [dependency]);

  React.useEffect(function() {
      setTimeout(() => setDependency(dependency+1), 1000);
  }, []);

  return <div>{dependency}</div>
}