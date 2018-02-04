import React, { Fragment } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/constants'
import PropTypes from 'prop-types';

export const StyledButton = styled.button`
	margin: 10px;
	border: none;
	padding: 8px 12px;
  min-width: 240px;
	background-color: ${colors.pink};
	color: ${colors.darkPurple};
	font-weight: bolder;
	line-height: 1;
	font-size: 26px;
	border-radius: 8px;
	transition: transform ease-in .1s; 
	box-shadow: 0px 0px 12px -1px ${colors.white};

	&:hover {
	  transform: scale(1.2);
	}

	& .caption {
		vertical-align: middle;
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

const Button = ({children, Icon, light, dark}) => (
  <StyledButton light={light} dark={dark}>
  	{
  		Icon ?
    		<Fragment>
    			<span className="caption">{ children }</span>{ Icon }
    		</Fragment>
			:
				children 
    }
  </StyledButton>
)

Button.propTypes = {
  Icon: PropTypes.element,
  light: PropTypes.bool,
  dark: PropTypes.bool
};

export default Button;
