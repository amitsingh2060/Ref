import React, { Component } from 'react';
import Input from './Input';

class ParentFocus extends Component {
    constructor(props) {
        super(props)
    
       this.componentRef = React.createRef()
    }
    handleClick = () => {
        this.componentRef.current.focusInput()
    }
    render() {
        return (
            <div>
               <Input ref={this.componentRef}/> 
               <button onClick={this.handleClick}>click </button>
            </div>
        );
    }
}

export default ParentFocus;