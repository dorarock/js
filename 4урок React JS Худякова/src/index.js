import React from "react";
import ReactDOM from "react-dom";
import LifeCycleUnmount from "./app/components/LifeCycleUnmount";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
  }

  render() {
    return (
      <div>
        {this.state.show ? <LifeCycleUnmount /> : null}
        <button onClick={() => {
          this.setState({ show: false });
        }}>Удалить компонент</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
