import React, { Component } from 'react';
import '../Styles/card.css';

class Card extends Component {
  render() {
    const { image, brand, name, price, colors, inStock } = this.props.items;
    
    return (
      <div className="card">
        <div className="im"><img src={require(`../${image}`)} width={192.72} height={128} padding='0.5rem 0.8rem' alt="alt"/></div>
        <div className="item-sum">
          <div className="brand">
            <p>{brand}</p>
            <p className="brand-title2">{name}</p>
          </div>
          <div className="detail">
            <div className="label"><p style={{color: 'gray', fontStyle: 'italic'}}>Price-</p><p style={{marginLeft: '0.5rem'}}>{price}</p></div>
            <div className="label colors-section"><p style={{color: 'gray', fontStyle: 'italic'}}>Colors-</p><div className="color">{colors.length > 1 ? colors.map(c => <div key={c} style={{width: '10px', height: '10px', background: `${c}`, marginLeft: '0.5rem'}}></div>) : <p style={{marginLeft: '0.5rem'}}>NA</p>}</div></div>
            <div className="label"><p style={{color: 'gray', fontStyle: 'italic'}}>In Stock-</p><p style={{marginLeft: '0.5rem'}} >{inStock}</p></div>
            <div className="button"><button>FULL SPECS</button></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

// {colors && colors.map((colors, i) => <Colors key={i} colors={colors}/>)}



