import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

axios.get('http://localhost:1337/students').then(response => {
  console.log(response);
});

class App extends React.Component {
  state = {
    students: [],
    error: null,
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get('http://localhost:1337/students');
      this.setState({ students: response.data });
    } catch (error) {
      this.setState({ error });
    }
  };

  renderStudent(){
    if(this.state.students.length === 0) return <p>There are no students!</p>;
      return <ul>{ this.state.students.map(students => <li key={students.name}>{students.name}</li>)}</ul>;
  }

  render() { 
    return <div className="App">
      <ul>
        {this.renderStudent()}
      </ul>
    </div>;
  }
}
 
export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
