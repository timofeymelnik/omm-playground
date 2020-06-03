import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

class App extends Component {
  state = {
    sidebarOpen: false
  };

  submitSearch = (data) => {
    setTimeout(() => console.log(data), 1000);
  };

  openSidebar = () => {
    this.setState({
      sidebarOpen: true
    })
  };

  closeSidebar = () => {
    this.setState({
      sidebarOpen: false
    })
  };

  render() {
    return (
      <div className="App">
        <Header
          openSidebar={this.openSidebar}
          submitSearch={this.submitSearch}
          name="Open Monument Map"
          btntext="login"/>
        <Sidebar
          isOpen={this.state.sidebarOpen}
          closeSidebar={this.closeSidebar}
        />
      </div>
    )
  }
}

export default App;
