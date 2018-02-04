import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSVG = styled.svg`
  display: inline-block;
  vertical-align: middle;

  & path {
    fill: ${props => props.color}
  }
`;

const Icon = props => {

  return (
    <StyledSVG
      width={`${props.size}px`}
      height={`${props.size}px`}
      color={props.color}
      viewBox="0 0 1024 1024"
    >
      <path
        d={props.icon}
      />
    </StyledSVG>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};

Icon.defaultProps = {
  size: 16,
  color: 'currentColor'
};

export default Icon;