import React, {Component} from 'react';

class NumInput extends Component {
    render() {
        const inputStyle = {
            border: '2px solid grey'
        };

        return (
            <input style={inputStyle} type="number" min="0" onChange={this.props.onChange}/>
        );
    }
}

export default NumInput;
