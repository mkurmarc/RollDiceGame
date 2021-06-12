// parent component
import React, { Component } from 'react';
import './RollDice.css';
import Dice from './Dice';

class RollDice extends Component {
    render() {
        return (
            <div>
                <Dice />
            </div>
        );
    }
}

export default RollDice;