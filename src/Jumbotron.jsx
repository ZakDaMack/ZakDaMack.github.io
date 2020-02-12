import React from 'react';
import './Jumbotron.sass';

class Jumbotron extends React.Component {
    render() {
        return (
            <div className="jumbotron" style={{background: this.props.background}}>
                {this.props.children}
            </div>
        );
    }
}

export default Jumbotron;