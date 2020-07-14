import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person'

// function App() {
//   return (
//     <div className="App">
//       <h1>
       
//       </h1>
//     </div>
//   );
// }
class App extends Component {
  state  = {
    persons: [
      { name: 'Max', age: 30  },
      { name: 'Bodya', age: 21  },
      { name: 'Steve', age: 26  }
    ],
    otherState: 'suck'
  }
  switchNamehandler = (newName)  => {
    // Dont DO THIS this.state.persons[0].name = 'Else';
    this.setState(  {
      persons: [
      { name: newName, age: 30  },
      { name: 'Bodywwwa', age: 21  },
      { name: 'Steve', age: 26  }

    ]}  )
  }
  nameChangeHandler = (event) => {
    this.setState(  {
      persons: [
      { name: 'Manu', age: 30  },
      { name: event.target.value, age: 21  },
      { name: 'Steve', age: 26  }

    ]
  } )
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      
    };
    return (
      <div className="App">
        <h1>Some</h1>
       <p>SSSSS</p>
      <button style = {style} onClick={() => this.switchNamehandler('Mass!!')} >Switch name</button>
      {/* <button onClick={this.switchNamehandler.bind(this, 'ass')} >Switch name</button> */}
       
       <Person
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}  > 
        </Person>

       <Person
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNamehandler.bind(this, 'ASS!')}
        changed={this.nameChangeHandler}
        >
          My same text   
        </Person>
      
       <Person

        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} 
        
        />

      </div>
     
    ); 
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'else'))
  }

}

export default App;
