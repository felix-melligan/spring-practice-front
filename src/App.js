import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
    this.request();
  }

  render() {
    return (
      <div className="App">
        <span className="Data">
          {this.displayData(this.state.data)}
        </span>
      </div>
    );
  }

  displayData(data) {
    let returnArray = [];
    data.forEach(element => {
      returnArray.push(
        <span key={element.id}>
          <h1>{element.first_name+" "+element.last_name}</h1>
            <ul>
              <li>
                {"id: "+element.id}
                </li>
              <li>
                {"Gender: "+element.gender}
              </li>
              <li>
                {"Email: "+element.email}
              </li>
              <li>
                {"IP: "+element.ip_address}
              </li>
            </ul>
        </span>
      );
    });
    return returnArray;
  }

  async request() {
    const response = await fetch('http://localhost:8080/users');
    this.setState({data: await response.json()});
  }
}

export default App;
