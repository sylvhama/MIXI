import React from 'react';
import Style from '../../styles/Button.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'

class Button extends React.Component{
    render(){
        return(
            <button className={Style.button}>
                <span>{this.props.btnText} </span>
                <span className={this.props.btnIcon}/>
            </button>
        )
    }
}

export default Button;