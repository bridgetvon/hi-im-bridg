import React from "react";
import {
  Footer,
  GitHub,
  Email,
  Instagram,
  LinkedIn,
  FooterLink,
} from "./FooterEl";

function FooterBar() {
  return (
    <>
      <Footer>
        <FooterLink href="https://github.com/bridgetvon">
          <i>
              <GitHub style={{marginRight: "10px"}} />
          
          </i>
        </FooterLink>
        <FooterLink href="https://www.instagram.com/bridgieesmalls/">
          <i>
              <Instagram style={{marginRight: "10px"}} />
          
          </i>
        </FooterLink>
        <FooterLink href="https://www.linkedin.com/in/bridget-schaefer-5a6661116/">
          <i>
              <LinkedIn style={{marginRight: "10px"}}/>
 
          </i>
        </FooterLink>

      
      </Footer>
    </>
  );
}

export default FooterBar;