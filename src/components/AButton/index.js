import React from 'react';
import { Pressable } from 'react-native';
import BaseComponent from '../BaseComponent';

class AButton extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const {
            children,
            ...otherProps
        } = this.props;

        return (
            <Pressable
                {...otherProps}>
                {children}
            </Pressable>
        );
    }
}

export default AButton;
