import React from 'react';

class Button extends React.Component{
  render(){
    return(
      <button className={ 'button' }>
        <span>{ this.props.children } </span>
          { this.props.btnIcon ? <span className={this.props.btnIcon }/> : null}
      </button>
    )
  }
}

export default Button;