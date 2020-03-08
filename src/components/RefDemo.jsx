import React, { Component } from 'react';

class RefDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
    //ref is used for focusing textinput

    componentDidMount() {
        this.inputRef.current.focus()
        console.log(this.inputRef);
        
    }
    handleClick = () => {
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
               <input type="text" ref={this.inputRef}/>
               <button onClick={this.handleClick}>click</button>
            </div>
        );
    }
}

export default RefDemo;