import React from 'react';
import ReactDOM from 'react-dom';
import takiCard1BlueImage from './1-blue.jpg';
import takiBackImage from './backTaki.jpg';

class FlippingCard extends React.Component {
    render() {
     return (
         <div title="taki card" className="flipping-card-wrapper">
             <img className="front-card" src={takiCard1BlueImage} />
             <img className="back-card" src={takiBackImage} />
         </div>
     )
    }
}

export default FlippingCard;



