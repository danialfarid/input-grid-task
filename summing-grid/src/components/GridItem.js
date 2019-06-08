import React, {Component} from 'react';

class GridItem extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default GridItem;
