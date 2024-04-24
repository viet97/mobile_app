import React from 'react'
import {
    StyleSheet,
    TextInput,
    View,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SVG } from '../../../assets/svg'
import AButton from '../../components/AButton'
import Text from '../../components/Text'
import { Colors } from '../../themes/Colors'
import BaseScreen from '../BaseScreen'

export default class LoginScreen extends BaseScreen {
    constructor(props) {
        super(props)
        this.state = {
            hiddenPassword: true
        }
    }

    _componentDidMount() {
    }


    renderContent() {
        const { hiddenPassword } = this.state
        return (
            <View
                style={{
                    flex: 1,
                    // alignItems: 'center'
                }}>
                <KeyboardAwareScrollView
                    style={{ flex: 1 }}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        alignItems: 'center'
                    }}
                    keyboardShouldPersistTaps={'handled'}>
                    <SVG.asilla
                        style={{
                            marginTop: '40%',
                        }}
                        width={100} height={100} />
                    <View
                        style={{
                            width: "100%",
                            flex: 1,
                            alignItems: "center",
                            marginTop: "30%"
                        }}>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: 'center',
                                backgroundColor: Colors.white,
                                paddingLeft: 15,
                                paddingRight: 15
                            }}>
                            <TextInput
                                placeholderTextColor={Colors.black60}
                                placeholder='ID'
                                style={{
                                    flex: 1,
                                    height: 60,
                                    backgroundColor: Colors.white,
                                    fontSize: 16,
                                    color: Colors.black60
                                }} />
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: 'center',
                                backgroundColor: Colors.white,
                                paddingLeft: 15,
                                paddingRight: 15,
                                marginTop: 8
                            }}>
                            <TextInput
                                placeholderTextColor={Colors.black60}
                                placeholder='Password'
                                secureTextEntry={hiddenPassword}
                                style={{
                                    flex: 1,
                                    height: 60,
                                    backgroundColor: Colors.white,
                                    fontSize: 16,
                                    color: Colors.black60
                                }} />
                            <AButton
                                onPress={() => this.setState({ hiddenPassword: !hiddenPassword })}
                                hitSlop={16}>
                                {hiddenPassword ? <SVG.eye width={20} height={20} /> : <SVG.close_eye width={20} height={20} />}
                            </AButton>
                        </View>
                        <AButton
                            style={{
                                width: 100,
                                height: 36,
                                alignItems: 'center',
                                justifyContent: "center",
                                marginTop: 30,
                                backgroundColor: Colors.black,
                                borderRadius: 10
                            }}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: Colors.white
                                }}>
                                Login
                            </Text>
                        </AButton>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        )

    }
}


const styles = StyleSheet.create({

})