import React from 'react';
import { View } from 'react-native';
import { SVG } from '../../../assets/svg';
import { Colors } from '../../themes/Colors';
import { getStatusBarHeight } from '../../utils/DeviceUtil';
import AButton from '../AButton';
import BaseComponent from '../BaseComponent';
import Text from '../Text';

const NAV_BAR_HEIGHT = 60;
export const HEADER_HEIGHT = (getStatusBarHeight() + NAV_BAR_HEIGHT);

class Header extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const {
            title,
        } = this.props;

        return (
            <View
                style={{
                    height: HEADER_HEIGHT,
                    width: "100%",
                    backgroundColor: Colors.white,
                    justifyContent: 'flex-end'
                }}>
                <View
                    style={{
                        height: NAV_BAR_HEIGHT,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: 'center',
                        paddingHorizontal: 24,
                    }}>
                    <View
                        style={{
                            width: 20,
                            height: 20
                        }} />
                    <Text
                        style={{
                            fontSize: 16,
                            color: Colors.black60
                        }}>
                        {title}
                    </Text>

                    <AButton
                        hitSlop={16}>
                        <SVG.user width={20} height={20} />
                    </AButton>
                </View>
            </View>
        );
    }
}

export default Header;
