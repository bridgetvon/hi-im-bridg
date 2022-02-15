import React from 'react';
import ReactStack from '../components/CardStack';

function Projects() {
  return (
  <>
 <ReactStack />
  <section id="my-work">
      <h1 style={{color: "#27405d"}}>Take a closer look at my work</h1>
      <div className="portfolio">
          <div class="main">
              <h3>Randonné</h3>
              <a href="https://enigmatic-bayou-07532.herokuapp.com/all-profile" class="work-item">
                  <img src={require('../images/randonnee.png')} alt="randonne homepage" class="work-img"></img>
              </a>
              <h4>Mysql, node.js, express.js, handlebars</h4>
          </div>
      <div className="portfolio">
          <div className="main">
              <h3>Tinder Clone</h3>
              <a href="https://tinder-clone-1a5ac.web.app" class="work-item">
                  <img src={require('../images/tinder-clone.png')} alt="tinder-clone homepage" class="work-img"></img>
              </a>
              <h4>React, firstore and firebase</h4>
          </div>
         
          <div className="work-title">
              <h3>Moon phase</h3>
              <a href="https://bridgetvon.github.io/moon-phase/" class="work-item">
                  <img src={require('../images/moon-phase.png')} alt="moon phase homepage" class="work-img"></img>
              </a>
              <h4>javaScript, HTML, bulma</h4>
          </div>
          <div className="work-title">
              <h3>Weather dash</h3>
              <a href="https://bridgetvon.github.io/awesome-weather-dashboard/" class="work-item">
                  <img src={require('../images/weather-dash.png')} alt="weather dash homepage" class="work-img"></img>
              </a>
              <h4>third party Api's, HTMl, javascript, css </h4>
          </div>
          <div className="work-title">
              <h3>Password Generator</h3>
              <a href="https://github.com/bridgetvon/js-password-generator" class="work-item">
                  <img src={require('../images/password-generator.png')} alt="moon phase homepage" class="work-img"></img>
              </a>
              <h4>javaScript</h4>
           </div>
          </div>
      </div>
  </section>
  </>
    )
}

export default Projects;
