import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/constants'

export const StyledButton = styled.button`
	margin: 10px;
	border: none;
	padding: 8px 12px;
	width: 9em;
	height: 2em;
	background-color: ${colors.pink};
	color: ${colors.darkPurple};
	font-weight: bolder;
	font-size: 20pt;
	border-radius: 8px;
	transition: transform ease-in .1s; 
	box-shadow: 0px 0px 12px -1px ${colors.white};

	&:hover {
	  transform: scale(1.2);
	}

	${props => props.dark ? `
		background-color: ${colors.lightPurple};
		color:${colors.white};
		box-shadow: 0px 0px 12px -1px ${colors.black};
	` : null}

	${props => props.light ? `
		background-color: ${colors.lightPink};
		color: ${colors.darkPurple};
	` : null}
`;

const Button = ({children, btnIcon, light, dark}) => (
  <StyledButton light={light} dark={dark}>
    <span>{ children }</span>
     { btnIcon ? <span className={ btnIcon }/> : null}
  </StyledButton>
)

export default Button;
