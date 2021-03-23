import React from 'react';
import './character.css';

class Character extends React.Component {
    render() {
        return (
            <div
                className="character">
                <div 
                    className="character__img" 
                    data-url={this.props.img} 
                    style={
                        {
                            background: `url(${'.' + this.props.img}) center no-repeat`,
                            backgroundSize: 'cover'
                        }
                    } />
                <h3>{this.props.name}</h3>
                <h4>{this.props.race}</h4>
                <p>Age: {this.props.age}</p>
                <p>Gender: {this.props.gender}</p>
                <p>Status: {this.props.status}</p>
            </div>
        )
    }
};

export default Character;