// import Reactstack from 'react-cards-stack';
import React from 'react';
import Randonne from '../../images/randonnee.png';
import MoonPhase from '../../images/moon-phase.png';
import WeatherDash from '../../images/weather-dash.png';
import Password from '../../images/password-generator.png';
import TinderClone from '../../images/tinder-clone.png';
import Routes from '../../images/routes.png';
import { TinderLikeCard } from 'react-stack-cards'



class Stack extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      directionTinder: "swipeCornerDownRight",
      isOpen: false
    }
    this.Tinder = null
  }
  
  onTinderSwipe() {
    this.Tinder.swipe()
  }

 
  render() {
    const arr = [Routes, TinderClone, Randonne, MoonPhase, WeatherDash, Password]
    return (
      <div id="stack" onClick={this.onTinderSwipe.bind(this)} >
        <TinderLikeCard 
            images={arr}
            width="800"
            height="500"
            direction={this.state.directionTinder}
            duration={400}
            ref={(node) => this.Tinder = node}
            className="tinder"
            style={cardStyle}
        >
        </TinderLikeCard> 
      </div>
    );
  }
}

const cardStyle = {
  position: "relative"
}
 
  
  export default Stack;
  