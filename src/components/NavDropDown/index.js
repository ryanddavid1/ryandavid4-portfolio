import React from 'react'
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'
import { FaLocationArrow } from "react-icons/fa"

import { DropDownContainer, DropDownIcon, DropDownItem, DropDownItemDesc, DropDownItemTitle, DropDownTextContainer } from './NavDropDown'

const NavDropDown = (props) => (
  <DropDownContainer active={props.isOpen}>
    <DropDownItem href="#" target="_blank" rel="noreferrer">
      <DropDownIcon>
        <AiFillPhone/>
      </DropDownIcon>
      <DropDownTextContainer>
        <DropDownItemTitle>Phone</DropDownItemTitle>
        <DropDownItemDesc>Let's get together and have a chat?'</DropDownItemDesc>
      </DropDownTextContainer>
    </DropDownItem>
    <DropDownItem href="#" target="_blank" rel="noreferrer">
      <DropDownIcon>
      <AiOutlineMail/>
      </DropDownIcon>
      <DropDownTextContainer>
        <DropDownItemTitle>Email</DropDownItemTitle>
        <DropDownItemDesc>If you want to talk jus send a message and I'll get back</DropDownItemDesc>
      </DropDownTextContainer>
    </DropDownItem>
    <DropDownItem href="#" target="_blank" rel="noreferrer">
      <DropDownIcon>
      <FaLocationArrow/>
      </DropDownIcon>
      <DropDownTextContainer>
        <DropDownItemTitle>Address</DropDownItemTitle>
        <DropDownItemDesc>68-35 burns st. apartment C2 forest hills NY, 11375</DropDownItemDesc>
      </DropDownTextContainer>
    </DropDownItem>
  </DropDownContainer>
);

export default NavDropDown
