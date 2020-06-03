import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';

class App extends Component {
  submitSearch = (data) => {
    setTimeout(() => console.log(data), 1000);
  };

  render() {
    return (
      <div className="App">
        <Header
          submitSearch={this.submitSearch}
          name="Open Monument Map"
          btntext="login"/>
      </div>
    )
  }
}

export default App;
