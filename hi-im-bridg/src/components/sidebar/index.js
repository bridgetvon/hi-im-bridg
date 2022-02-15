import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu } from './SidebarEl';

const Sidebar = ({toggle}) => {
  return (
      <SidebarContainer >
          <Icon onClick= {toggle}>
              <CloseIcon  />
          </Icon>
          <SidebarWrapper>
              <SidebarMenu>
                  <SidebarLink to="/about" onClick= {toggle}>
                    About
                  </SidebarLink>
                  <SidebarLink to="/projects" onClick= {toggle}>
                    Portfolio
                  </SidebarLink>
                  <SidebarLink to="/contact" onClick= {toggle}>
                    Contact
                  </SidebarLink>
              </SidebarMenu>
          </SidebarWrapper>
      </SidebarContainer>
  )
};
 export default Sidebar;