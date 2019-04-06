import React, { Component } from 'react';
import Card from './components/Card.js';
import './App.css';

class App extends Component {

  state = {
    items: [
      {
        image: 'cycle_sample.png',
        brand: 'STATE',
        name: 'WARHAWK',
        price: '$579',
        colors: [],
        inStock: '1'
      }, 
      {
        image: 'images.png',
        brand: 'STATE',
        name: 'CARDINAL',
        price: '$449',
        colors: [],
        inStock: '2'
      },
      {
        image: 'cycle_sample.png',
        brand: 'LINUS',
        name: 'DUTCHI 3 OR 8',
        price: '$469 - $849',
        colors: ['black', 'red', 'blue', 'green'],
        inStock: 'No'
      },
      {
        image: 'images.png',
        brand: 'LINUS',
        name: 'MIXTE 3 OR 8',
        price: '$649 - $849',
        colors: [ 'blue', 'black'],
        inStock: 'Yes'
      },
      {
        image: 'cycle_sample.png',
        brand: 'LINUS',
        name: 'DUTCHI 1',
        price: '$469 - $849',
        colors: ['black', 'red', 'blue', 'green'],
        inStock: 'No'
      }, 
      {
        image: 'images.png',
        brand: 'LINUS',
        name: 'DOVER 1 OR 5',
        price: '$599 - $749',
        colors: ['black', 'red', 'blue'],
        inStock: 'No'
      }
    ]
  }
  render() {
    return (
      <div>
        <div className="header">
          <h3 className="header-title">BIKE STOCK</h3>
          <h4 className="header-tag">BRANDS WE CARRY -<span className="tag"> LINUS /</span> <span className="tag">BROMPTON /</span> <span className="tag">CHRISTIANIA /</span> <span className="tag">STATE</span></h4>
        </div>
        <div className="main">
          {this.state.items.map((items, i) => <div key={i}>
              <Card items={items}/>
        </div>)}
      </div>
      </div>
      
    );
  }
}

export default App;

// <p>name</p>
//           <img src={require(`${op.image}`)} width={200} height={200} />
//           <div style={{height: '20px', width: '20px', background: `${op.colors[1]}`}}></div>


// <header className="App-header">
//       <div style={{marginTop: '4rem'}}>
//       <img src={require('./indian-oil-logo-CD98A381FE-seeklogo.com_.png')} width={200} height={200} />
//       <p>
//         Please take survey
//       </p>
//       <a
//         className="App-link"
//         href="https://docs.google.com/forms/d/e/1FAIpQLSeB0d2XdsuU1wHgWII7pzgA6pkqqI8jeXpi0aMelwxq-U5J0A/formResponse"
//         //target="_blank"
//         rel="noopener noreferrer"
//       >
//         Survey Form
//       </a>
//       </div>
//       <div style={{marginBottom: '1rem'}}>
//         <span>Created by IS (PBSO)</span>
//       </div>
//       </header>