import React, { PureComponent } from 'react';
import { Text as RNText } from 'react-native';

export const FONT_FAMILY = {
    extraBold: 'Poppins-ExtraBold',
    bold: 'Poppins-Bold',
    semiBold: 'Poppins-SemiBold',
    regular: 'Poppins-Regular',
}

class Text extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const {
            bold,
            semiBold,
            extraBold,
            style,
            children,
            ...otherProps
        } = this.props;

        return (
            <RNText
                {...otherProps}
                style={[style]}
            >{children}</RNText>
        );
    }
}

export default Text;
