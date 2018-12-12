import React, {Component} from 'react';

class MyComponent extends Component {

    handleClick() {
        this.refs.myIntput.value="auto complete";
    }

    render(){
        return (
            <div>
                <input type="text" ref="myIntput"/>
                <input type="button" onClick={this.handleClick.bind(this)} value="点击自动完成"/>
            </div>
        );
    }
}

export default MyComponent;