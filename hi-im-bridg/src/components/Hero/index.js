import React from 'react';
import Typewriter from 'typewriter-effect';
import { HeroContainer, HeroContent, HeroBg } from './HeroEl';
import Card from '../Hero/CardFlip';


function Hero() {
    
  return (
      <HeroContainer>
          <HeroBg>
          </HeroBg>
          <HeroContent>
            <Card />
              <div className='typed'>
              <Typewriter
              onInit = { (typewriter) => {
                  typewriter
                  .typeString("Hi I'm Bridget")
                  .pauseFor(500)
                  .deleteAll()
                  .typeString("Rock climber, skier and...")
                  .pauseFor(500)
                  .deleteAll()
                  .typeString("full stack web developer! Click the image to learn more about me.")
                  .start();
              }}
              />
                </div>
          </HeroContent>
      </HeroContainer>
  );
}




export default Hero;
